const logger = require("../../config/logger")

const db = require("../../config/emrmysqldb")
const uuidAPIKey = require('uuid-apikey');

const { db_create_uuid } = require("../../dbcontrollers/uuid.controller")
const { db_tenant_exist_trans } = require("../../dbcontrollers/tenant.controller")
const UUID_CONST = require("../constants/AppEnum").UUID_CONST

// Structure of UUIDDICT
// uuidDict = {
// "uuidType":UUID_TYPE_CONST
// "tenantID" : Specific Tenant
// }

// Example Usage
// creates a new entry patient<newUUID> , tenant_uuid in the uuid table
// var {getUUID} = require("./src/lib/system/uuidSystem")
// uuidDict = {"uuidType":"patient", "tenantID":"1234-5678"}
// getUUID(uuidDict)
// .then((uuid) => {
//   logger.debug("App UUID is", uuid)
// })

var getUUID = async function (uuidDict, transaction) {
  let uuidFull = ""
  if ((typeof uuidDict === 'undefined')) {
    logger.debug("uuidDict is undefined")
    return null
  }
  let { uuidType, tenantID, max_retry } = uuidDict
  if ((typeof uuidType === 'undefined') || (typeof tenantID === 'undefined')) {
    logger.debug("uuidDict has some undefined", uuidDict)
    return null
  }

  if ((typeof UUID_CONST[uuidType] === 'undefined')) {
    logger.debug("uuidType is undefined")
    throw new Error('uuidType is undefined');
    return null
  }

  if ((typeof max_retry === 'undefined')) { max_retry = 1 }
  let uuidGen = false

  uuid = uuidAPIKey.create()["uuid"]
  uuidFull = uuidType + uuid

  logger.debug("uuidType is ", UUID_CONST[uuidType])

  if (UUID_CONST[uuidType] == 'tenant') {
    logger.debug("uuidType is tenant")
    tenantID = uuidFull
  }

  let index = 0
  while (uuidGen == false && index < max_retry) {
    logger.debug("The UUID generated is ", uuidFull, uuidGen)
    index += 1

    await db_tenant_exist_trans(tenantID, UUID_CONST[uuidType], transaction)
      .then((tenantUUID) => {
        if (UUID_CONST[uuidType] == 'tenant') {
          tenantUUID = uuidFull
        }
        logger.debug('the tenant uuid is', tenantUUID)
        db_create_uuid(tenantUUID, uuidFull, transaction)
          .then((uuid_data) => {

            uuidGen = true
            logger.debug("uuid_data  is" + uuid_data, uuidGen)
            return uuidFull
          })
          .catch((err) => {
            throw new Error('UUID Create error' + err);
          })
      })
      .catch((err) => {

        throw new Error('tenant UUID does not exist' + err);

      })
    // Need a way to make sure that UUID added to DB is being used or need clean up logic - if say some patient insert failed
    // Need to go and remove this UUID

  }
  await transaction.transaction.commit()
  return uuidFull
}

module.exports = {
  getUUID
}
