var express = require("express")
var router = express.Router()

// async function db_create_users(user_data) {
//     logger.debug("Create users")
//     const { email, password, role, tenant } = user_data
//     const hashedPassword = await hashPassword(password)
//     logger.debug("Hashed password: " + hashedPassword)
//     let users
//     try {
//         users = await Users_Secure.create({
//             username: email,
//             email: email,
//             password: hashedPassword,
//             role: role,
//             tenant: tenant,
//         })
//     } catch (err) {
//         logger.debug("User addition failed Error: " + err)
//         req.apiRes["error"] = {
//             error: "User addition failed Error :" + error,
//         }
//         next()
//     }
//     logger.debug("user created" + users)
//     req.apiRes = PATIENT_CODE["2"]
//     req.apiRes["response"] = {
//         response: users,
//     }
//     next()
// }

//
// async function db_validate_user(email) {
//     const user = await Users_Secure.findOne({
//         where: {
//             email: email
//         },
//     })
//     return user
// }
//
// async function db_validate_user_auth(tenant_id, username, password) {
//     // This async function gets the tenants matching the tenant_name
//     // It currently does not check if more than one tenant exist or not. TODO
//     // Returns a promise of the tenant_id number
//     user_id = ""
//     await Users.findAll({
//             where: {
//                 tenant_id: tenant_id,
//                 username: username,
//                 password: password,
//             },
//             raw: true,
//         })
//         .then((user_data) => {
//             logger.debug("User list is" + user_data)
//             user_id = user_data[0]["id"]
//             logger.debug("user uuid " + user_id)
//         })
//         .catch((err) => {
//             logger.debug("User with name " + tenant_id + "not found Err:" + err)
//             throw new Error(
//                 "Login Failure as part of user cred -  tenant check"
//             )
//         })
//
//     return user_id
// }

// All the APIs are hosted Below for User and Signup

/* GET users listing. */
// router.get("/", function (req, res, next) {
//     res.send("respond with a sign resource")
// })

//Dont need this

// router.post("/signup", async function (req, res, next) {

//     logger.debug("user create Body output is ", req.body)

//     fname = req.body["first_name"]
//     lname = req.body["last_name"]
//     phone = req.body["mob_no"]
//     username = req.body["user_name"]
//     password = req.body["password"]
//     tenant_name = req.body["tenant_name"]
//     tenant_id = req.userTenantId
//     let results
//     logger.debug("Tenant uuid outside " + tenant_id)

//     if (typeof tenant_id_result === "undefined") {
//         error = new Error("SignUp not possible for this Request")
//         return res.json({
//             result: false,
//             response: {},
//             error: error,
//         })
//     }
//     req.body["tenant"] = tenant_id
//     try {
//         results = await db_create_users(req.body)
//     } catch (err) {
//         logger.debug("User addition failed Error: " + err)
//         req.apiRes["error"] = {
//             error: "User addition failed Error :" + error,
//         }
//         next()
//     }

//     logger.debug("user created")
//     return res.json({
//         result: true,
//         response: results,
//         error: {},
//     })
// })


module.exports = router
