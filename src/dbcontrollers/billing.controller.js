const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require('moment');
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Billing = models.billing

models.billing.belongsTo(models.patch_patient_map, {
    foreignKey: "pid",
    targetKey: "pid",
})

models.billing.belongsTo(models.patient_data, {
    foreignKey: "pid",
    targetKey: "pid",
   
})

models.billing.belongsTo(models.tasks, {
    foreignKey: "pid",
    targetKey: "pid",
})

models.patch_patient_map.hasMany(models.patch, {
    foreignKey: "patch_uuid",
    sourceKey: "patch_uuid",
})

async function db_get_billing_report(tenant_id, params) {
    let { limit, offset } = params
    let whereStatement = { tenant_id: tenant_id }
    let billing
    if (params.pid && params.bill_date == "0") {
        billing = await Billing.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patch,
                        },
                    ],
                },
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date']
                }
               
            ],
            where: {
                [Op.or]: [
                    {
                        pid: {
                            [Op.like]: `${params.pid}`,
                        },
                    },
                    {
                        bill_date: {
                            [Op.gte]: moment(params.bill_date).startOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                        bill_date: {
                            [Op.lte]: moment(params.bill_date).endOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                    },
                    {
                        billing_uuid: {
                            [Op.like]: `${params.billing_uuid}`,
                        },
                    },
                ],
                [Op.and]: [
                    {
                        tenant_id: tenant_id,
                    },
                ],
            },
            raw: false,
        })

        return billing
    } else if (params.pid && params.bill_date != "0") {
        billing = await Billing.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patch,
                        },
                    ],
                },
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date']
                }
            ],
            where: {
                [Op.and]: [
                    {
                        bill_date: {
                            [Op.gte]: moment(params.bill_date).startOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                        bill_date: {
                            [Op.lte]: moment(params.bill_date).endOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                    },
                    {
                        pid: {
                            [Op.like]: `${params.pid}`,
                        },
                    },
                ],
            },
            raw: true,
            logging: console.log
        })

        return billing
    } else if (params.bill_date != "0" && params.pid == "0") {
        logger.debug("in else if 2nd loop", params.pid, params.bill_date)
        billing = await Billing.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patch,
                        },
                    ],
                },
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date']
                },
                {
                    model:models.tasks,
                }
            ],
            where: {
                [Op.and]: [
                    {
                        tenant_id: tenant_id,
                    },
                    {
                        bill_date: {
                            [Op.gte]: moment(params.bill_date).startOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                        bill_date: {
                            [Op.lte]: moment(params.bill_date).endOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                    },
                ],
            },
            raw: false,
            //where: whereStatement,
        })

        return billing
    } else if (params.bill_date!="0") {
        logger.debug("in else if 3rd loop", params.pid, params.bill_date)
        billing = await Billing.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patch,
                        },
                    ],
                },
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date']
                }
            ],
            where: {
                [Op.and]: [
                    {
                        bill_date: {
                            [Op.like]: `%${params.bill_date}%`,
                        },
                    },
                ],
            },
            raw: false,
        })

        return billing
    }else {
        logger.debug("in else loop", tenant_id)
        let billing = await Billing.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            raw: true,
            where: whereStatement,
        })

        return billing
    }
}




async function db_update_billing(tenant_id, billing_data, transaction) {
    let trans = null
    let id= billing_data['id'] ? await db_billing_pid_exist(billing_data['id']) : null;
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let billing
    if(!id){
        billing=await Billing.create(billing_data,{transaction:trans})
    } else {
        billing=await Billing.update(billing_data,{
            where:{
                id:billing_data['id']
            }
        })
    }
    return billing
   
  }

  async function db_billing_pid_exist(id) {
    let billing_data
    try {
        billing_data = await Billing.count({
            where: {
                id: id,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("tasks  " + id + "not found Err:" + err)
    }
    return billing_data
}

async function db_billing_exist(pid) {
    let billing_data
    try {
        billing_data = await Billing.count({
            where: {
                pid: pid,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("Billing  " + pid + "not found Err:" + err)
    }
    return billing_data
}

async function db_update_billing_information(tenant_id, billing_data, given_pid,transaction) {
    let { pid } = given_pid
    billing_data = JSON.stringify(billing_data)
    billing_data = JSON.parse(billing_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let billing
    try {
        billing = await Billing.update(
            billing_data,
            {
                where: {
                    pid: given_pid,
                },
            },
            { transaction: trans }
        )
        logger.debug("Billing update output is" + billing)
    } catch (err) {
        logger.debug(
            "Billing update  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Billing insert  error -  tenant check" + err)
    }
    return billing
}

module.exports = {
    db_update_billing,
    db_get_billing_report,
    db_billing_exist,
    db_billing_pid_exist,
    db_update_billing_information
}
