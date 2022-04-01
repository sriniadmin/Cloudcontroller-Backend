const { Parser } = require('sql-ddl-to-json-schema');
const path = require('path');
// or:
//import { Parser } from 'sql-ddl-to-json-schema'
// var usersSecureSchema = require("./users_secure")
// var usersSchema = require("./users")
// var testSchema = require("./test")
// import schema from 'users_secure.json';
let usersSchema = require('./users.json')
let usersSecureSchema = require('./users_secure.json')
let testSchema = require('./test.json')

var Ajv = require('ajv').default;
const addFormats = require('ajv-formats').default;
var ajv = new Ajv({
            validateSchema: true,
            // schemaId: '$id',
            allErrors: true
        });
// const { Ajv } = require( "ajv")
// let ajv = new Ajv({ allErrors: true });

addFormats(ajv);
console.log("out is done")
console.log("The dir is",__dirname, path.resolve(__dirname, 'users.json'))
ajv.addSchema([
  require(path.resolve(__dirname, 'users.json')),
  require(path.resolve(__dirname, 'users_secure.json')),
  require(path.resolve(__dirname, 'test.json')),
])
 // './users_secure.json', './test.json'));

let users = {
  "id": 124,
  "tenant_id": 45,
  "role": "doctor",
  "user_uuid": "user123"
}

let users_sec = {
  "id" : 123,
  "last_update" : "34"
}

 let testJSON = {
   "users_secure_ref" : {
     "id" : 123,
     "last_update" : "Test"
   },
   "users_ref" : {
     "id": 124,
     "tenant_id": 3,
     "role": "doctor",
     "user_uuid": "user123"
   }
 }

console.log("out is done2 ")
// console.log(ajv.validate(test.json, {}), ajv.errors);

const validate = ajv.compile(usersSchema)
console.log("compile done for testSchema")
const valid = validate(users)
console.log("The validation result is ", valid)


const validate1 = ajv.compile(usersSecureSchema)
console.log("compile done for testSchema")
const valid1 = validate1(users_sec)
console.log("The validation result is ", valid1)


const validate2 = ajv.compile(testSchema)
console.log("compile done for testSchema")
const valid2 = validate2(testJSON)
console.log(validate2.errors)
console.log("The validation result is ", valid2)
