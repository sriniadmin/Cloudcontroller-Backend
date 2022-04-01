"use strict";
const logger = require("../../config/logger")
const addFormats = require('ajv-formats').default;
var Ajv = require('ajv').default;
var ajv = new Ajv({
            validateSchema: true,
            // schemaId: '$id',
            allErrors: true
        });
addFormats(ajv);
const path = require('path');

function validate_schema(req,schema) {
    let count=schema['count']
    let validate=null
    let child_count=schema['child_count']
    var child

    var i
    for(i=0; i<count; i++) {
        let schema_name = schema['schema'+i]
        // logger.debug('Schema is',schema,schema_name,schema['schema'+i],'schema'+i)
        // logger.debug('child',schema['child_count'])
        for (child=0; child<child_count; child++) {
          // logger.debug('child',schema['child_count'],schema['child0'],child)
          // logger.debug('Child is','child'+child)
            var childSchema = schema['child'+child]
            // logger.debug('it is',childSchema)

            let validate = ajv.getSchema(childSchema.split('.')[0]) // This removes .js or .json from the file name
            // logger.debug("Patient schema validate is ", validate)
            if (!validate) {
              ajv.addSchema(
              require(path.resolve(__dirname, childSchema)),
              )
            }
        }


        let schema_import=require("./"+schema_name)
        // logger.debug('Schema is',schema_import)

        validate=ajv.compile(schema_import)
        // logger.debug("abs")

    }
    // logger.debug("Parsing user with  Validation",req.body)
    // const validate = ajv.compile(usersSchema)

    const valid = validate(req.body)
    logger.debug("Validating the schema",valid) 
    logger.debug(validate.errors)
    return {"status":valid,"error":validate.errors}
}




module.exports = {validate_schema}
































// // Utility Functions for the Roles and Authorization
// const jwt = require("jswebtoken")
// const bcrypt = require("bcrypt")
// const logger = require("../config/logger")
// // Add this to the top of the file
// const { roles } = require('../roles/roles')

// // EMR Database code

// // Database
// const Sequelize = require("sequelize")
// const sequelizeDB = require("../config/emrmysqldb")
// var initModels = require("../dbmodels/sequelizeEMRModels/init-models")
//     .initModels
// var models = initModels(sequelizeDB)

// const Users_Secure = models.users_secure
// const API_TOKEN = models.api_token


// async function hashPassword(password) {
//     return await bcrypt.hash(password, 10)
// }

// async function validatePassword(plainPassword, hashedPassword) {
//     return await bcrypt.compare(plainPassword, hashedPassword)
// }

// async function create_users(user_data) {
//     logger.debug("Create users")
//      const { lname, password, role } = user_data
//      const hashedPassword = await hashPassword(password)
//      logger.debug("Hashed password: " + hashedPassword)
//     Users_Secure.create({
//         username: lname,
//         lname: lname,
//         password: hashedPassword,
//         role: role,
//     })
//         .then((users) => {
//             logger.debug("user created"+users)
//             // res.js({ title: "GeeksforGeeks" })
//         })
//         .catch((err) => {
//             logger.debug("User addition failed Error: " + err)
//             // res.js({ title: "GeeksforGeeksERROR" })
//         })
// }

// // End Database code

//  // utility for roles and login validation
// exports.grantAccess = function(action, resource) {
//  return async (req, res, next) => {
//   try {
//    const permission = roles.can(req.user.role)[action](resource);
//    if (!permission.granted) {
//     return res.status(401).js({
//      error: "You don't have enough permission to perform this action"
//     });
//    }
//    next()
//   } catch (error) {
//    next(error)
//   }
//  }
// }

// exports.allowIfLoggedin = async (req, res, next) => {
//  try {
//   const user = res.locals.loggedInUser;
//   if (!user)
//    return res.status(401).js({
//     error: "You need to be logged in to access this route"
//    });
//    req.user = user;
//    next();
//   } catch (error) {
//    next(error);
//   }
// }

// // end of utility for roles and validation

// exports.signup = async (req, res, next) => {
//     logger.debug("New SignUp ")
//     create_users(req.body)
//         .then((user_results) => {
//             logger.debug("User results is", user_results)
//         })
//         .catch((err) => {
//             logger.debug("Error in user create"+err)
//         })
//     try {
//         logger.debug("JWT is ",process.env.JWT_SECRET)
//         logger.debug("user id is ",req.body.lname)

//         const accessToken = jwt.sign(
//             { userId: req.body.lname },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "1d",
//              }
//         )
//         // newUser.accessToken = accessToken
//         logger.debug("user jw token ",accessToken)
//         res.js({
//             data: req.body,
//             accessToken,
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// exports.login = async (req, res, next) => {
//     try {
//         const { lname, password } = req.body
//         const user = await Users_Secure.findOne({
//             where: { lname },
//         })
//         if (!user) return next(new Error("lname does not exist"))
//         const validPassword = await validatePassword(password, user.password)
//         if (!validPassword) return next(new Error("Password is not correct"))
//         const accessToken = jwt.sign(
//             { userId: user.lname },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "1d",
//             }
//         )
//         API_TOKEN.create({
//             token_auth: accessToken,
//             lname: user.lname,
//             user_id: user.id,
//             // expiry: new Date(new Date().getTime() + 1000),
//             expiry: new Date(new Date().getTime() + Number(process.env.JWT_SECRET_INTERVAL)),
//         })
//             .then((result) => logger.debug(result))
//             .catch((err) => logger.debug(err))
//             res.cookie("tokenKey", accessToken)
//         res.status(200).js({
//             data: { lname: user.lname, role: user.role },

//         })
//     } catch (error) {
//         next(error)
//     }
// }

// exports.getUsers = async (req, res, next) => {
//     const users = await User.find({})
//     res.status(200).js({
//         data: users,
//     })
// }

// exports.getUser = async (req, res, next) => {
//     try {
//         const userId = req.params.userId
//         const user = await User.findById(userId)
//         if (!user) return next(new Error("User does not exist"))
//         res.status(200).js({
//             data: user,
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// exports.updateUser = async (req, res, next) => {
//     try {
//         const update = req.body
//         const userId = req.params.userId
//         await User.findByIdAndUpdate(userId, update)
//         const user = await User.findById(userId)
//         res.status(200).js({
//             data: user,
//             message: "User has been updated",
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// exports.deleteUser = async (req, res, next) => {
//     try {
//         const userId = req.params.userId
//         await User.findByIdAndDelete(userId)
//         res.status(200).js({
//             data: null,
//             message: "User has been deleted",
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// // End of Utility Functions for the Roles and Authorization
