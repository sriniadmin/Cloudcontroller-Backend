const Sequelize = require("sequelize");
const postgresSequelizeDB=require("../config/emrpostgresdb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(postgresSequelizeDB)
const logger = require("../config/logger");
const ApprovalType=models.approval_type
var Approval = function (approvalObj) {
    // Basic Details
    this.descr=approvalObj.descr

}
async function db_get_approval_type_list(tenant_id, username,params) {
    approval_type_list = ""
    let {limit, offset,filter, pid} = params
    if (pid) {
      logger.debug("The PID to fetch is ", pid)
      await ApprovalType.findAll({
          limit:parseInt(limit),
          order:['id'],
          raw: true,


          })
          .then((approval_type_data) => {
              logger.debug("Approval type list is" + approval_type_data)
              approval_type_list = approval_type_data
          })
          .catch((err) => {
              logger.debug("approval type list fetch error " + tenant_id + "not found Err:" + err)
              throw new Error(
                  "approval type list fetch error -  tenant check"
              )
          })
          return approval_type_list
    } else {

    await ApprovalType.findAll({
        limit:parseInt(limit),
        offset:parseInt(offset),
        order:['id'],
        raw: true,
        })
        .then((approval_type_data) => {
            logger.debug("approval list is" + approval_type_data)
            approval_type_list = approval_type_data
        })
        .catch((err) => {
            logger.debug("approval  list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "approval list fetch error -  tenant check" + err
            )
        })

    return approval_type_list
}
}
module.exports={db_get_approval_type_list}
