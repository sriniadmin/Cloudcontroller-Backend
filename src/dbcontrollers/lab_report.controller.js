const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
  require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Lab_Report = models.lab_report

async function db_get_lab_report(params) {
  const t = await sequelizeDB.transaction()
  try {
    const data = await Lab_Report.findAll({
      attributes: ['id', 'name', 'date', 'type', 'isShow'],
      where: {
        pid: params.pid
      }
    },
    { transaction: t })
    const result = { data: data }
    await t.commit()
    return result
  } catch (error) {
    await t.rollback()
    throw error
  }
}


async function db_get_lab_report_by_id(params) {
  const t = await sequelizeDB.transaction()
  try {
    const data = await Lab_Report.findOne({
      attributes: ['id', 'name', 'data', 'date', 'type'],
      where: {
        id: params.id
      }
    },
    { transaction: t })
    const result = { data: data }
    await t.commit()
    return result
  } catch (error) {
    await t.rollback()
    throw error
  }
}


async function db_create_lab_report(params) {
  const t = await sequelizeDB.transaction()
  try {
    const data = await Lab_Report.create(
    params,
    { transaction: t })
    const result = { data: data }
    await t.commit()
    return result
  } catch (error) {
    await t.rollback()
    throw error
  }
}


async function db_download_data(params) {
  const t = await sequelizeDB.transaction()
  try {
    const data = await Lab_Report.findOne({
      where: {
        id: params.id
      }
    },
    { transaction: t })
    const result = { data: data }
    await t.commit()
    return result
  } catch (error) {
    await t.rollback()
    throw error
  }
}

module.exports = { 
  db_create_lab_report, 
  db_get_lab_report,
  db_get_lab_report_by_id,
  db_download_data
}