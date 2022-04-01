const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Lab_Report=models.lab_report

async function db_create_lab_report(tenant_id, lab_report_data, transaction) {
  lab_report_data = JSON.stringify(lab_report_data)
  lab_report_data = JSON.parse(lab_report_data)
  let trans = null
  if (typeof transaction !== "undefined") {
      logger.debug("Transacation is not undefined")
      trans = transaction["transaction"]
  }
  let report
  try {
      report = await Lab_Report.create(lab_report_data, { transaction: trans })
      logger.debug("Lab report  insert output is" + report)
  } catch (err) {
      logger.debug(
          "Lab report insert  error " + tenant_id + " not found Err:" + err
      )
      throw new Error("Lab report insert  error -  tenant check" + err)
  }
  return report
}

async function db_get_lab_report(tenant_id) {
  let report
  try {
    report =await Lab_Report.findAll()
  } catch (err) {
      throw new Error("Error in fetching the lab report" + err)
  }
  return report
}
module.exports={db_create_lab_report,db_get_lab_report}
