async function loginUser(req, res, next) {
    let { username, password, email } = req.body //superadmin@ demohospital.com
    { !email && (email = username) }
    { !username && (username = email) }
    let name = username.split("@")[0]
    logger.debug("THE BODY OF LOGIN IS", req.body, email, username, name)
    newTenantId = req.userTenantId

    try {
        logger.debug("Checking the domain")
        let tenant_name = email.split("@")[1]
        logger.debug("tenant_name is " + tenant_name)
    } catch (err) {
        logger.debug(
            "Error in username@domain : " +
            req.body["email"] +
            JSON.stringify(err)
        )
        req.apiRes = SYSTEM_AAA_CODE["4"]
        req.apiRes["error"] = {
            error: "Error in logging in the user :" + err,
        }
        return next()
    }
    logger.debug("password is", password, req.body.password)

    let tenant_name = email.split("@")[1]
    logger.debug("THE TENANT IS ", tenant_name)
    db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            db_validate_user_auth(tenant_id_result, email, password)
                .then(async (user) => {
                    logger.debug(
                        "INSIDE THE USER AUTH FUNCTION",
                        dbOutput_JSON(user)
                    )
                    user = dbOutput_JSON(user)
                    userPid = user[0]['pid']
                    logger.debug('the user pid is', userPid)
                    logger.debug('the role is', user[0]["role"])
                    logger.debug('the tenant id is', tenant_id_result)//this gives the tenant id
                    req.query = {
                        tenant_id: tenant_id_result,
                        role_name: user[0]['role'],
                        limit: 10,
                        offset: 0,
                        filter: 0,
                    }
                    logger.debug('the req query is', req.query)
                    let rolesResponse = await getRoleData(req)
                    // logger.debug('the roles response is', rolesResponse)
                    logger.debug('the roles response is', JSON.stringify(rolesResponse, null, 2))
                    req.query = {
                        limit: 10,
                        offset: 0,
                        filter: 0,
                        tenant_id: tenant_id_result,
                    }
                    let licenseResponse = await getLicenseData(req)
                    // logger.debug('the license data is', licenseResponse)
                    logger.debug('the license data is', JSON.stringify(licenseResponse, null, 2))
                    if (!user) {
                        logger.debug("User/Email is not existing")
                        err = new Error("Email/User does not exist")
                        req.apiRes = SYSTEM_AAA_CODE["5"]
                        req.apiRes["error"] = {
                            error: "EMAIL/USER DOES NOT EXIST",
                        }
                        return next()
                    }
                    logger.debug("THE PASSWORD IS ", password, user[0].password)
                    passwordCheck(password, user[0].password)
                        .then((result) => {
                            logger.debug("The result is ", result)
                            if (result) {
                                req.apiRes = SYSTEM_AAA_CODE["10"]
                                req.apiRes["error"] = {
                                    error: "PASSWORD ERROR",
                                }
                                return next()
                            }
                            expiryTime = new Date(
                                new Date().getTime() +
                                Number(process.env.JWT_EXPIRY_TIMEOUT)
                            )
                            const accessToken = jwt.sign(
                                {
                                    userEmail: email,
                                    userRole: user[0]["role"],
                                    userTenant: email.split("@")[1], //TENANT_NAME
                                    apiVersion: process.env.apiVersion,
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: Number(
                                        process.env.JWT_EXPIRY_TIMEOUT
                                    ),
                                }
                            )
                            logger.debug("Api token is created", accessToken)
                            API_TOKEN.create({
                                token_auth: accessToken,
                                email: email,
                                user_id: user[0].id,
                                expiry: expiryTime,
                            })
                                .then((result) =>
                                    logger.debug(
                                        "Login jwt - Updated the API_TOKEN - Result :  " +
                                        result
                                    )
                                )
                                .catch((err) =>
                                    logger.debug(
                                        "Jwt create error in API TOKEN - Error : " +
                                        err
                                    )
                                )

                            redisResponse = redisClient.updateRedisCache(
                                "tenants",
                                tenant_name,
                                { tenant_id: tenant_id_result }
                            )
                            redisResponse = redisClient
                                .updateRedisCache(
                                    "tenants_id",
                                    tenant_id_result,
                                    {
                                        tenant_name: tenant_name,
                                    }
                                )
                                .catch((err) => {
                                    logger.error(
                                        "Tenant Catch - Patient list error : " +
                                        err
                                    )
                                    req.apiRes = TENANT_CODE["1"]
                                    req.apiRes["error"] = {
                                        error: "Failure In Tenant Information",
                                    }
                                    return next()
                                })

                            res.cookie("tokenKey", accessToken)
                            req.apiRes = SYSTEM_AAA_CODE["6"]
                            // req.apiRes=LOGIN_ALERT_CODE["1"]
                            req.apiRes["response"] = {
                                userEmail: email,
                                role: user[0]["role"],
                                tenant: tenant_id_result,
                                licenseData: licenseResponse,
                                rolesData: rolesResponse,
                                pid: userPid
                            }
                            logger.debug("this is for alert testing")

                            return next()
                        })
                        .catch((err) =>
                            logger.debug(
                                "Jwt create error in API TOKEN - Error : " + err
                            )
                        )
                })
                .catch((err) => {
                    logger.debug("Error in user validation" + err)
                    req.apiRes = SYSTEM_AAA_CODE["5"]
                    req.apiRes["error"] = {
                        error: "INVALID USER",
                    }
                    return next()
                })
        })
        .catch((err) => {
            logger.debug("Error in tenant validation" + err)
            req.apiRes = SYSTEM_AAA_CODE["11"]
            req.apiRes["error"] = {
                error: "INVALID EMAIL",
            }
            return next()
        })
}