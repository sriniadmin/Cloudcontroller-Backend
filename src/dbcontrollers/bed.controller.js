const Sequelize = require("sequelize");
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const uuidAPIKey = require('uuid-apikey');
const Tenants = models.tenant
const BEDS=models.bed
var BED = function (bedobj) {
    // Basic Details
    this.tenant_uuid=bedobj.tenant_uuid,
    this.bed_uuid=bedobj.bed_uuid,
    this.bed_num=bedobj.bed_num,
    this.location_uuid=bedobj.location_uuid,
    this.active=bedobj.active,
    this.archive=bedobj.archive

}

async function db_get_bed_list(tenant_id, username) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    bed_list = ""
    await BEDS.findAll({
            // The where class is needed to find the USER having the same tenant id
            // where: {
            //     tenant_id: tenant_id,
            //     username: username,

            // },
            raw: true,
        })
        .then((bed_data) => {
            logger.debug("BED list is" + bed_data)
            bed_list = bed_data
        })
        .catch((err) => {
            logger.debug("BED list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "BED list fetch error -  tenant check"
            )
        })

    return bed_list
}

async function db_create_bed(tenant_id, bed_data,transaction) {
    //This route created new patch in the db
    bed_list = ""
    let pdata = new BED(bed_data)
    logger.debug("BED data is " + bed_data)

    await BEDS.create({
            tenant_uuid:bed_data['tenant_uuid'],
            bed_uuid:bed_data['bed_uuid'],
            bed_num:bed_data['bed_num'],
            location_uuid:bed_data['location_uuid'],
            active:bed_data['active'],
            archive:bed_data['archive'],

        }, {transaction: transaction["transaction"]})
        .then((bed_data) => {
            logger.debug("BED insert output is" + bed_data)
            bed_list = bed_data
        })
        .catch((err) => {
            logger.debug(
                "BED insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("BED insert  error -  tenant check")
        })

    return bed_list
}





async function db_get_tenant_id(tenant_name) {
    // This async function gets the beds matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    tenant_id = ""
    await Tenants.findAll({
            where: {
                tenant_name: tenant_name,
            },
            raw: true,
        })
        .then((tenant_data) => {
            logger.debug("Tenant list is" + tenant_data)
            tenant_id = tenant_data[0]["id"]
            logger.debug("Tenant uuid " + tenant_id)
        })
        .catch((err) => {
            logger.debug(
                "Tenant with name " + tenant_name + "not found Err:" + err
            )
            throw new Error("Login Failure as part of tenancy check")
        })
    logger.debug("Done with Await of Tenant")
    return tenant_id
}


module.exports={db_get_bed_list,db_get_tenant_id,db_create_bed}
