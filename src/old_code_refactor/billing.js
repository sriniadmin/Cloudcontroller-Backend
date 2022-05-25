const logger = require("../config/logger")
const sequelizeDB = require("../config/emrmysqldb")
const RBAC = require("../middleware/rbac")
const constant = require("../utils/constants");
const {
    db_create_billing,
    db_update_billing,
    db_get_billing_report,
    db_billing_exist,
    db_billing_pid_exist,
    db_update_billing_information,
    db_get_patch_data,
    db_search_billing_id,
    db_updated_task
} = require("../dbcontrollers/billing.controller")

const {
    db_patient_exist
} = require("../dbcontrollers/patients.controller")

const { UUID_CONST, BILLING_CODE } = require("../lib/constants/AppEnum")
const getUUID = require("../lib/system/uuidSystem").getUUID
const { db_update_task } = require("../dbcontrollers/task.controller")

async function getBilling(req, res, next) {
    let tenant_id = req.userTenantId
    let billing
    let patch_data
    try {
        billing = await db_get_billing_report(tenant_id, req.query);
        patch_data = await db_get_patch_data(req.query)
    } catch (err) {
        logger.debug("Billing list error " + err)
        console.log(err);
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
        patchData: patch_data,
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
const prepareDataForCreateBilling = (postData) => {
    const listAllCodeSupport = Object.values(constant.CPT_CODE);
    let params = {};
    if(!listAllCodeSupport.includes(Number(postData.code))){
        return false;
    }
    if(postData.code == constant.CPT_CODE.CPT_99453){
        if(postData.time_spent != null && postData.time_spent != ''){
            return false;
        }
        params = {time_spent: postData.time_spent};
    }
    if(postData.code == constant.CPT_CODE.CPT_99457 || postData.code == constant.CPT_CODE.CPT_99458){
        if(!postData.add_task_date || !postData.add_task_staff_name || !postData.add_task_note 
            || !postData.add_task_id){
                return false;
        }
        params = [{task_id: postData.add_task_id, task_date: postData.add_task_date, 
            staff_name: postData.add_task_staff_name, task_note: postData.add_task_note}]
    }
    if(postData.bill_date) postData.bill_date = new Date(postData.bill_date);
    postData.params = JSON.stringify(params);
    return postData;
}

const prepareDataForUpdateBillingTask = (postData, billingData) => {
    let result = [];
    const date = new Date();
    const params = JSON.parse(billingData[0].params);
    if(postData.task_id){
        const newData = {
            task_id: postData.task_id,
            task_date: postData.task_date,
            staff_name: postData.staff_name,
            task_note: postData.task_note,
            task_time_spend: postData.task_time_spent
        }
        result = params.map(item => {
            if(item.task_id == postData.task_id){
                return newData
            } else {
                return item
            }
        })
    } else {
        const newData = {
            task_id: date.getTime(),
            task_date: postData.task_date,
            staff_name: postData.staff_name,
            task_note: postData.task_note,
            task_time_spend: postData.task_time_spent
        }
        params.push(newData);
        result = params;
    }
    return JSON.stringify(result);
}

async function createBilling(req, res, next) {
    const t = await sequelizeDB.transaction()
    const pid = req.body.pid;
    if(!pid){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Invalid params",
        }
        return next();
    }
    const existPid = await db_patient_exist(tenant_id, pid)
    if(!existPid){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Patient Id is no longer exist",
        }
        return next();
    }

    let billing_data= prepareDataForCreateBilling(req.body);
    if(!billing_data){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Invalid params",
        }
        return next();
    }
    try {
        billing = await sequelizeDB.transaction(async function (t) {
            return db_update_billing(tenant_id, billing_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Billing list error " + err)
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE BILLING",
        }
        console.log(err);
        return next()
    }
    req.apiRes = BILLING_CODE["3"] 
    billing=req.body
    req.apiRes["response"] = {
        billingData: billing,
        count: billing.length,
    }
    res.response(req.apiRes)
    return next()
}

async function updateBillingTask(req, res, next) {
    const t = await sequelizeDB.transaction();
    let result;
    const pid = req.body.pid;
    const billingId = req.body.billing_id;
    if(!pid || !billingId){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Invalid params",
        }
        return next();
    }
    const existPid = await db_patient_exist(null, pid);
    const existBilling = await db_search_billing_id(req.body);
    if(!existPid){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Patient Id is no longer exist",
        }
        return next();
    }

    if(!existBilling){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Billing is no longer exist",
        }
        return next();
    }

    let billingTaskData= prepareDataForUpdateBillingTask(req.body, existBilling);
    if(!billingTaskData){
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "Invalid params",
        }
        return next();
    }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_updated_task(billingTaskData, billingId, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Billing list error " + err)
        req.apiRes = BILLING_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN Update THE BILLING",
        }
        console.log(err);
        return next()
    }
    req.apiRes = BILLING_CODE["3"] 
    req.apiRes["response"] = {
        billingData: result
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
    updateBillingInformation,
    updateBillingTask
}
