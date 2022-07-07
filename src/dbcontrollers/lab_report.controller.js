const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
  require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Lab_Report = models.lab_report

async function db_get_lab_report(params, transaction) {
  try {
    return report = await Lab_Report.findAll({
      where: {
        pid: params.pid
      }
    },
    { transaction: transaction })
  } catch (error) {
    throw error
  }
}


async function db_create_lab_report(params, transaction) {
  try {
    return await Lab_Report.create(
      params,
      { transaction: transaction }
    )
  } catch (error) {
    throw error
  }
}

module.exports = { db_create_lab_report, db_get_lab_report }