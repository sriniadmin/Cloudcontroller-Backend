const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sequelizeDB = require("../config/emrmysqldb");
const bcrypt = require("bcrypt");
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels;
var models = initModels(sequelizeDB);
const logger = require("../config/logger");
const Patient_Report_Map = models.patient_report_map;

async function db_create_patient_report(
    tenant_id,
    patient_report_data,
    transaction
) {
    patient_report_data = JSON.stringify(patient_report_data);
    patient_report_data = JSON.parse(patient_report_data);
    logger.debug("THE PATIENT REPORT BODY IS", patient_report_data);
    let trans = null;
    if (typeof transaction !== "undefined") {
        logger.debug("Transaction is not undefined");
        trans = transaction["transaction"];
    }
    let patient_report;
    try {
        patient_report = await Patient_Report_Map.create(patient_report_data, {
            transaction: trans,
        });
        logger.debug("Patient report insert output is" + patient_report);
    } catch (err) {
        logger.debug(
            "Patient report insert  error " +
                tenant_id +
                " not found Err:" +
                err
        );
        throw new Error("Patient report insert  error -  tenant check" + err);
    }
    return patient_report;
}
async function db_get_patient_report(tenant_id, params) {
  patient_report_list = ""
  let { limit, offset, filter, pid } = params
  whereStatement={
      tenant_id:tenant_id,
      pid:pid
  }
  logger.debug('the pid is',pid)
  logger.debug('this is patient report controller')
      await Patient_Report_Map.findAll({
          limit: parseInt(limit),
          //offset:parseInt(offset),
          attributes:["report_json"],
          raw: true,
          where: whereStatement,
      })
          .then((patient_report_data) => {
              logger.debug("patient report list is" + patient_report_data)
              patient_report_list = patient_report_data
          })
          .catch((err) => {
              logger.debug(
                  "Patient report list fetch error " +
                      tenant_id +
                      "not found Err:" +
                      err
              )
              throw new Error("Patient report list fetch error -  tenant check")
          })

      return patient_report_list

}

module.exports = {
    db_create_patient_report,
    db_get_patient_report,
};
