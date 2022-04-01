const Sequelize = require("sequelize");
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const uuidAPIKey = require('uuid-apikey');
const Tenants = models.tenant
const Drugs=models.drugs
var Drug = function (drugobj) {
    // Basic Details
    this.name=drugobj.name,
    this.ndc_number=drugobj.ndc_number,
    this.on_order=drugobj.on_order,
    this.reorder_point=drugobj.reorder_point,
    this.max_level=drugobj.max_level,
    this.last_notify=drugobj.last_notify,
    this.reactions=drugobj.reactions,
    this.form=drugobj.form,
    this.size=drugobj.size,
    this.unit=drugobj.unit,
    this.route=drugobj.route,
    this.substitute=drugobj.substitute,
    this.related_code=drugobj.related_code,
    this.cyp_factor=drugobj.cyp_factor,
    this.active=drugobj.active,
    this.allow_combining=drugobj.allow_combining,
    this.allow_multiple=drugobj.allow_multiple,
    this.drug_code=drugobj.drug_code,
    this.consumable=drugobj.consumable,
    this.dispensable=drugobj.dispensable

}


async function db_get_drug_list(tenant_id, username) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    drug_list = ""
    await Drugs.findAll({
            // The where class is needed to find the on_order having the same tenant id
            // where: {
            //     tenant_id: tenant_id,
            //     username: username,

            // },
            raw: true,
        })
        .then((drug_data) => {
            logger.debug("Drug list is" + drug_data)
            drug_list = drug_data
        })
        .catch((err) => {
            logger.debug("Drug list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "Drug list fetch error -  tenant check"
            )
        })

    return drug_list
}

async function db_create_Drug(tenant_id, drug_data) {
    //This route created new Drug in the db
    drug_list = ""
    let pdata = new Drug(drug_data)
    logger.debug("Drug data is " + drug_data)

    await Drugs.create({
            name:drug_data['name'],
            ndc_number:drug_data['ndc_number'],
            on_order:drug_data['on_order'],
            reorder_point:drug_data['reorder_point'],
            max_level:drug_data['max_level'],
            specialty:drug_data['specialty'],
            last_notify:drug_data['last_notify'],
            reactions:drug_data['reactions'],
            form:drug_data['form'],
            size:drug_data['size'],
            unit:drug_data['unit'],
            route:drug_data['route'],
            substitute:drug_data['substitute'],
            related_code:drug_data['related_code'],
            cyp_factor:drug_data['cyp_factor'],
            active:drug_data['active'],
            allow_combining:drug_data['allow_combining'],
            allow_multiple:drug_data['allow_multiple'],
            drug_code:drug_data['DRUG_CODE'],
            consumable:drug_data['consumable'],
            dispensable:drug_data['dispensable'],
            tenant_id:tenant_id

        })
        .then((drug_data) => {
            logger.debug("Drug insert output is" + drug_data)
            drug_list = drug_data
        })
        .catch((err) => {
            logger.debug(
                "Drug insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Drug insert  error -  tenant check")
        })

    return drug_list
}







module.exports={db_get_drug_list,db_create_Drug}
