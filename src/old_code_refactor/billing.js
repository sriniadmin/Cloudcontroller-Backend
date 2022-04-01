const logger = require("../config/logger")
const sequelizeDB = require("../config/emrmysqldb")
const RBAC = require("../middleware/rbac")
const {
    db_create_billing,
    db_update_billing,
    db_get_billing_report,
    db_billing_exist,
    db_billing_pid_exist,
    db_update_billing_information,
} = require("../dbcontrollers/billing.controller")

const { UUID_CONST, BILLING_CODE } = require("../lib/constants/AppEnum")
const getUUID = require("../lib/system/uuidSystem").getUUID
const { db_update_task } = require("../dbcontrollers/task.controller")

async function getBilling(req, res, next) {
    let tenant_id = req.userTenantId
    logger.debug("tenant ID is ", tenant_id)
    logger.debug('the req query is',req.query)
    let billing
    try {
        billing = await db_get_billing_report(tenant_id, req.query)
    } catch (err) {
        logger.debug("Billing list error " + err)
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
        return next()
    }
    logger.debug("Billing list is " + billing)
    req.apiRes = BILLING_CODE["2"]
    req.apiRes["response"] = {
        billingData: billing,
        count: billing.length,
    }
    res.response(req.apiRes)
    return next()
}

async function getBillingData(req,next) {
    let tenant_id = req.userTenantId
    logger.debug("tenant ID is ", tenant_id, req.query)
    let billing
    logger.debug("the req query for the billing is", req.query)
    try {
        billing = await db_get_billing_report(tenant_id, req.query)
        logger.debug("the billing get data is", billing)
    } catch (err) {
        logger.debug("Billing list error " + err)
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
        return next()
    }
    logger.debug("Billing list is " + billing)
    return {
        billingData: billing,
        count: billing.length,
    }
}

async function createBilling(req, res, next) {
    const t = await sequelizeDB.transaction()
    tenant_id = req.userTenantId
    let billing_data = req.body
    logger.debug("the new billing data body is", billing_data)
    let given_pid=req.body['pid']
    let newBillingTask=req.body['code_tasks'][0]['Billing_Information'][0]
    logger.debug(
        "the code tasks in the new billing data body is",newBillingTask
    )
    let billing
    req.query = {
        limit: 10,
        offset: 0,
        filter: 0,
        pid: given_pid,
        bill_date:0,
        billing_uuid:0,
        status:0
    }
    let newBillingUpdated
    let getBilling=await getBillingData(req,next)
    logger.debug('the get billing  is',JSON.stringify(getBilling))
    logger.debug('the get billing billing data is',getBilling['billingData'],typeof(getBilling['billingData'],getBilling['billingData'].length))
    if(getBilling['billingData'].length===0){
        logger.debug('in if loop ')
        newBillingUpdated=[newBillingTask]
    } else {
        logger.debug('in else loop')
        logger.debug('the new billing updated for if loop is',newBillingUpdated)
    newBillingUpdated=getBilling['billingData'][0]['code_tasks'][0]['Billing_Information']
    logger.debug('the new billing updated is',newBillingUpdated)
    newBillingUpdated.push(newBillingTask)
    logger.debug('the  billing updated array data is',newBillingUpdated)

    }
        logger.debug('the  billing updated array data outseide if else loop is',newBillingUpdated)
    req.query = {
        limit: 10,
        offset: 0,
        filter: 0,
        pid: given_pid,
    }
    let task_data={
        pid:given_pid
    }
    uuidDict = { uuidType: UUID_CONST["billing"], tenantID: tenant_id }
    try {
        billing = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            billing_data["billing_uuid"] = uuid_result
            billing_data["tenant_id"] = tenant_id
            billing_data["pid"] = given_pid
            return db_get_billing_report(tenant_id, req.query).then(
                (get_billing_data) => {
                    logger.debug(
                        "all billing data in transaction is",
                        get_billing_data
                    )
                    billing_data['code_tasks'][0]['Billing_Information']=newBillingUpdated
                    logger.debug('the final code tasks billing information is',billing_data['code_tasks'][0]['Billing_Information'])
                    return db_update_billing(tenant_id, billing_data, {
                        transaction: t,
                    }).then((billing_info)=> {
                        logger.debug('the billing info is',billing_info)
                        task_data['task']=newBillingUpdated
                        task_data['tenant_id']=tenant_id
                        return db_update_task(tenant_id,task_data,{
                            transaction:t
                        })
                    })
                }
            )
        })
    } catch (err) {
        logger.debug("Billing list error " + err)
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE BILLING",
        }
        return next()
    }
    logger.debug("Billing list is " + billing)
    req.apiRes = BILLING_CODE["3"] 
    billing=req.body
    req.apiRes["response"] = {
        billingData: billing,
        count: billing.length,
    }
    res.response(req.apiRes)
    return next()
}
let code=[]

async function updateBilling(req, res, next) {
    const t = await sequelizeDB.transaction()
    let given_pid = req.body['pid']
    logger.debug("the given pid is", given_pid)
    let tenant_id = req.userTenantId
    let billing_result
    let billing_data = req.body
    req.query = {
        limit: 10,
        offset: 0,
        filter: 0,
        pid: given_pid,
        bill_date:0,
        billing_uuid:0,
        status:0
    }
    logger.debug("the new billing data body is", billing_data)
    let newTaskUpdatedArray=billing_data['code_tasks'][0]['Billing_Information'][0]
    logger.debug('the newTaskUpdated Array is',newTaskUpdatedArray)
    let newTaskUpdated = newTaskUpdatedArray
    logger.debug("the new task added is", newTaskUpdated)
    let get_billing_data
    get_billing_data = await getBillingData(req,next)
    logger.debug("THE REPORT DATA IS", JSON.stringify(get_billing_data))
    
    let newCodeTask = get_billing_data["billingData"][0]["code_tasks"][0]
    logger.debug('the new code task is',newCodeTask)
    let firstTask = newCodeTask['Billing_Information'][0]["taskTotalTimeSpent"]
    firstTask=parseInt(firstTask)
    logger.debug("the first total task time is", firstTask)
    newCodeTask['Billing_Information'].push(newTaskUpdated)
    logger.debug('the new code task UPDATED ARRAY IS is',newCodeTask)
    
    newCodeTask['Billing_Information'].map((item)=> {
        logger.debug('the map code in code task item is',item.code)
        code.push(item.code)
    })
    logger.debug('the code array is',code)
    logger.debug('the stringify code task is',[newCodeTask])
    try {
        billing_result = await sequelizeDB.transaction(function (t) {
            billing_data["code_tasks"] = [newCodeTask]
            //billing_data["status"]=code
            return db_update_billing(tenant_id, billing_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("ERROR IN UPDATING THE BILLING" + err)
        req.apiRes = BILLING_CODE["6"]
        req.apiRes["error"] = {
            error: "ERROR IN UPDATING THE BILLING :" + err,
        }
        return next()
    }
    logger.debug("Billing result is" + billing_result)
    billing_result = req.body
    logger.debug("the billing result is", billing_result)
    req.apiRes = BILLING_CODE["5"]
    req.apiRes["response"] = {
        billingData: billing_result,
        count: billing_result.length,
    }
    return next()
}

async function updateBillingInformation(req, res, next) {
    const t = await sequelizeDB.transaction()
    let billing_data = req.body
    logger.debug('the billing data is',billing_data)
    let given_pid = billing_data['pid']
    logger.debug('the billing data pid is'.given_pid)
    tenant_id = req.userTenantId
    let result
    try {
        result = await sequelizeDB.transaction(function (t) {
            billing_data['pid']=given_pid
            return db_update_billing_information(tenant_id, billing_data, given_pid, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("ERROR IN UPDATING THE BILLING" + err)
        req.apiRes = BILLING_CODE["6"]
        req.apiRes["error"] = {
            error: "ERROR IN UPDATING THE BILLING :" + err,
        }
        return next()
    }
    logger.debug("Result is" + result)
    respResult = req.body
    req.apiRes = BILLING_CODE["5"]
    req.apiRes["response"] = {
        billingDdata: respResult,
        count: respResult.length,
    }
    return next()
}


module.exports = {
    createBilling,
    updateBilling,
    getBilling,
    getBillingData,
    updateBillingInformation
}
