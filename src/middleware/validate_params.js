const url = require('url');

observeRoutes = [
    "/api/alerts",
    "/api/patients"
]

// Standard params expected to be part of most requests
observeParams = [
    {
        key: 'userEmail',
        required: {
                "/api/alerts": true,
                "/api/patients": true
        },
        type: 'string',
        validatorFunctions: [(param) => {return param.length >= 5}]
    },
    {
        key: 'userRole',
        required: {
            "/api/alerts": true,
            "/api/patients": true
        },
        type: 'string',
        validatorFunctions: [(param) => {return param.length >= 5}]
    },
    {
        key: 'tenant',
        required: {
            "/api/alerts": true,
            "/api/patients": true
        },
        type: 'string',
        validatorFunctions: [(param) => {return param.length >= 5}]
    }
]

// Route specific query string
observeQuery = {
    "/api/alerts": ["pid"],
    "/api/patients": []
}

function validateUser(user, req) {
    logger.debug("User ", user, req.user)
}

function validateTenant(tenant, req) {
    logger.debug("Tenant ", tenant, areq.tenant)
}

validateParams = function (req, res, next) {
    let reqParams = observeParams;
    let path = url.parse(req.url,true).pathname
    let query = url.parse(req.url,true).query
    let body = req.body
    if (req.Params) {
        reqParams = observeParams.concat(req.Params)
    }
    console.log("Validate Params", reqParams)
    console.log("Path ", path)
    console.log("Body", body)
    console.log("Query", query)
    
    if (observeRoutes.includes(path)) {
        for (let param of reqParams) {
            console.log(param)
            console.log(param.key, param.required[path])
            if (req.body && checkParamPresent(Object.keys(req.body), param)) {
                let reqParam = req.body[param.key];
                if (!checkParamType(reqParam, param)) {
                    return res.send(400, {
                        status: 400,
                        result: `${param.key} is of type ` +
                        `${typeof reqParam} but should be ${param.type}`
                    });
                } else {
                    if (!runValidators(reqParam, param)) {
                        return res.send(400, {
                            status: 400,
                            result: `Validation failed for ${param.key}`
                        });
                    }
                    console.log("Validated Param", param.key)
                }
            } else if (param.required[path]) {
                return res.send(400, {
                    status: 400,
                    result: `Missing Parameter ${param.param_key}`
                });
            }
        }
    } else {
        console.log("Not of interest")
    }
    next();
}


function validateReqParams(requestParams) {
    return function (req, res, next) {
        requestParams = stdParams.push(requestParams)
        console.log("Validate Params", requestParams)
        for (let param of requestParams) {
            if (checkParamPresent(Object.keys(req.body), param)) {
                let reqParam = req.body[param.param_key];
                if (!checkParamType(reqParam, param)) {
                    return res.send(400, {
                        status: 400,
                        result: `${param.param_key} is of type ` +
                        `${typeof reqParam} but should be ${param.type}`
                    });
                } else {
                    if (!runValidators(reqParam, param)) {
                        return res.send(400, {
                            status: 400,
                            result: `Validation failed for ${param.param_key}`
                        });
                    }
                }
            } else if (param.required){
                return res.send(400, {
                    status: 400,
                    result: `Missing Parameter ${param.param_key}`
                });
            }
        }
        next();
    }
};

const checkParamPresent = function (reqParams, paramObj) {
    if (reqParams) {
        return (reqParams.includes(paramObj.param_key));
    }
};

const checkParamType = function (param, paramObj) {
    if (param) { 
        const reqParamType = typeof param;
        return reqParamType === paramObj.type;
    }
};

const runValidators = function (reqParam, paramObj, req) {
    for (let validator of paramObj.validatorFunctions) {
        if (!validator(reqParam, req)) {
            return false
        }
    }
    return true;
};

module.exports = validateParams;