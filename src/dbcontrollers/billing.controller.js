const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require('moment');
const sequelizeDB = require("../config/emrmysqldb")
const lodash = require("lodash")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Billing = models.billing
const BillingSummary = models.billing_summary
const PatchPatientMap = models.patch_patient_map

models.billing.belongsTo(models.patch_patient_map, {
    foreignKey: "pid",
    targetKey: "pid",
})

models.billing.belongsTo(models.patient_data, {
    foreignKey: "pid",
    targetKey: "pid",
   
})

models.billing_summary.belongsTo(models.patient_data, {
    foreignKey: "pid",
    targetKey: "pid",
   
})

models.billing_summary.belongsTo(models.patch_patient_map, {
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

async function db_get_patch_data(params){
    let result = [];
    let pids = null;
    try{
    if(typeof params.pid == 'string'){
        pids = [params.pid];
    } else {
        pids = params.pid
    }

    if(params.pid){
        result = await PatchPatientMap.findAll({
            include: [
                {
                    model: models.patch,
                },
            ],
            where: {
                [Op.and]:[
                    {
                        pid: {
                            [Op.in]: pids
                        }
                    },
                ],
            },
            raw: true
        })
    }
} catch(err){
    console.log(err);
}
    return result;
}
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
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date', 'primary_consultant', 'secondary_consultant']
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
                            [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                        },
                        [Op.and]:[{
                            bill_date: {
                                [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                            }
                            }
                        ]
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
            logging: console.log
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
                            [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                        },
                        [Op.and]:[{
                            bill_date: {
                                [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                            }
                            }
                        ]
                    },
                    {
                        pid: {
                            [Op.like]: `${params.pid}`,
                        },
                    },
                ],
            },
            raw: false,
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
                            [Op.gte]: moment(params.bill_date).startOf('month').format('YYYY-MM-DD')
                        },
                        bill_date: {
                            [Op.lte]: moment(params.bill_date).endOf('month').format('YYYY-MM-DD')
                        },
                    },
                ],
            },
            raw: false,
            logging: console.log
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

async function db_updated_task(params, billing_id) {
    try {
        const result = await Billing.update(
          { params: params },
          { where: {id: billing_id } }
        )
        return result;
      } catch (err) {
        throw new Error("Billing  " + billing_id + "not found Err:" + err)
      }
}

async function db_search_billing_summary_id(pid, bill_date){
    let billing_summary_data
    let startDate = moment(new Date(bill_date)).startOf('month').set({hour:0,minute:0,second:0}).format('YYYY-MM-DD HH:mm:ss');
    let endDate = moment(new Date(bill_date)).endOf('month').set({hour:23,minute:59,second:59}).format('YYYY-MM-DD HH:mm:ss');
    
    try {
        billing_summary_data = await BillingSummary.findAll({
            where: {
                [Op.and]: [
                    {
                        pid: pid
                    },
                    {
                        date: {
                            [Op.gte]: startDate
                        },
                        [Op.and]:[{
                            date: {
                                [Op.lte]: endDate
                            }
                            }
                        ]
                    },
                ],
            },
            raw: true,
            logging: console.log
        })
    } catch (err) {
        throw new Error("Billing  " + pid + "not found Err:" + err)
    }
    return billing_summary_data
}

async function db_search_billing_id(postData) {
    let billing_data
    try {
        billing_data = await Billing.findAll({
            where: {
                [Op.and]: [
                    {
                        pid: postData.pid
                    },
                    {
                        id: postData.billing_id
                    },
                    {
                        code: postData.code
                    },
                    {
                        bill_date: {
                            [Op.gte]: moment(postData.bill_date).startOf('month').format('YYYY-MM-DD hh:mm:ss')
                        },
                        [Op.and]:[{
                            bill_date: {
                                [Op.lte]: moment(postData.bill_date).endOf('month').format('YYYY-MM-DD hh:mm:ss')
                            }
                            }
                        ]
                    },
                ],
            },
            raw: true
        })
    } catch (err) {
        throw new Error("Billing  " + postData.pid + "not found Err:" + err)
    }
    return billing_data
}

async function db_get_billing_report_count(params) {
    try{
        let { filter = null } = params;
        if(!filter){
            billingCount = await BillingSummary.count({
                where: {
                    date: {
                        [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                    },
                    [Op.and]: [{
                        date: {
                            [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                        }
                    }
                    ]
                },
                raw: false
            })
        } else {
            billing = await BillingSummary.count({
                where: {
                    date: {
                        [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                    },
                    [Op.and]: [{
                        date: {
                            [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                        }
                    }
                    ],
                    [Op.and]: [
                        Sequelize.where(
                            Sequelize.fn('CONCAT', Sequelize.col('fname'), ' ', Sequelize.col('lname')), 
                            { [Op.like]: `%${filter}%` }
                        )
                    ]
                },
                raw: false
            })
            return billing
        }
    } catch(err){
        console.log(err);
        return false;
    }
}
async function db_get_billing_report_summary(params) {
    try{
    let { limit, offset, filter = null, sort = null, sortdir = 'DESC' } = params
    let arrSort = ['id', 'ASC'];
    let billing;
    if(sort){
        arrSort = [sort, sortdir];
    }
    if(!params.bill_date) params.bill_date = moment().format('YYYY-MM-DD');
    if(!filter){
    billing = await BillingSummary.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date', 'disabled', 'primary_consultant', 'secondary_consultant'],
                    where: {
                        disabled: 1
                    }
                }
               
            ],
            where: {
                date: {
                    [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                },
                [Op.and]: [{
                    date: {
                        [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                    }
                }
                ]
            },
            order: [
               arrSort
            ],
            raw: false
        })
        return billing
    } else {
        billing = await BillingSummary.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model:models.patient_data,
                    attributes:['med_record','email','street','fname','lname','sex','DOB','phone_contact','admission_date', 'primary_consultant', 'secondary_consultant']
                }
               
            ],
            where: {
                date: {
                    [Op.gte]: new Date(moment(params.bill_date).startOf('month').format('YYYY-MM-DD'))
                },
                [Op.and]: [{
                    date: {
                        [Op.lte]: new Date(moment(params.bill_date).endOf('month').add(1, 'd').format('YYYY-MM-DD'))
                    }
                }
                ],
                [Op.and]: [
                    Sequelize.where(
                        Sequelize.fn('CONCAT', Sequelize.col('fname'), ' ', Sequelize.col('lname')), 
                        { [Op.like]: `%${filter}%` }
                    )
                ]
            },
            order: [
                arrSort
             ],
            raw: false
        })
        return billing
    }
    }catch(err){
        console.log(err);
        return false;
    }
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

async function db_update_billing_summary(pid, billDate, params){
    let billing_summary_record = await db_search_billing_summary_id(pid, billDate);
    let result = null;
    if(billing_summary_record && lodash.isArray(billing_summary_record) && billing_summary_record.length > 0){
        try {
            result = await BillingSummary.update(
              params,
              { where: {id: billing_summary_record[0].id } }
            )
            return result;
          } catch (err) {
            throw new Error("Billing Summary  " + "not found Err:" + err)
          }
    } else {
        result = await BillingSummary.create({
            pid: pid,
            date: billDate,
            ...params
        })
    }
    return result;
}
module.exports = {
    db_update_billing,
    db_get_billing_report,
    db_billing_exist,
    db_billing_pid_exist,
    db_update_billing_information,
    db_search_billing_id,
    db_updated_task,
    db_get_billing_report_summary,
    db_get_billing_report_count,
    db_update_billing_summary,
    db_get_patch_data
}
