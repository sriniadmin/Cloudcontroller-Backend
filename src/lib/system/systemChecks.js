const logger = require("../../config/logger")
const db = require("../../config/emrmysqldb")
const {ERROR_CODE}=require("../constants/AppEnum")

var dbValidate =function(){
  db.authenticate()
    .then(() => logger.info("Auth Success"))
    .catch((err) => {
      logger.error("Auth Failed  Error : " + err)
      //process.exit(ERROR_CODE["DB_FAILURE"])
    })
}

module.exports = {
  dbValidate
}
