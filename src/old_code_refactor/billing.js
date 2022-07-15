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
    db_get_billing_report_summary,
    db_get_billing_report_count,
    db_get_patch_data,
    db_search_billing_id,
    db_update_billing_summary,
    db_updated_task,
    db_get_billing_report_summary_by_practitioner,
    db_get_practitioner_list
} = require("../dbcontrollers/billing.controller")

const {
    db_patient_exist
} = require("../dbcontrollers/patients.controller")

const { UUID_CONST, BILLING_CODE } = require("../lib/constants/AppEnum")
const getUUID = require("../lib/system/uuidSystem").getUUID
const { db_update_task } = require("../dbcontrollers/task.controller")
const {CPT_CODE} = require("../utils/constants");

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
        patchData: patch_data.data,
        count: billing.length,
    }
    return responseAPI(res, req.apiRes)
}

async function getBillingData(req,next) {
    let tenant_id = req.userTenantId
    let billing
    try {
        billing = await db_get_billing_report(tenant_id, req.query)
    } catch (err) {
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
        return next()
    }
    return {
        billingData: billing,
        count: billing.length,
    }
}

async function getBillingTotalSummary(req, res, next) {
    let billing;
    let patchData = [];
    try {
        billing = await db_get_billing_report_summary(req.query)
        let billingCount = await db_get_billing_report_count(req.query)
        let listPids = [];
        billing.map(item => {
            if(!listPids.includes(item.pid)){
                listPids.push(item.pid)
            }
        })
        patchData = await db_get_patch_data({pid: listPids});
    } catch (err) {
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
        return next()
    }
    if(!billing){
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
        return next()
    }
    req.apiRes = BILLING_CODE["2"]
    req.apiRes["response"] = {
        billingData: billing,
        patchData: patchData.data,
        count: billingCount
    }
    return responseAPI(res, req.apiRes)
}

const prepareDataForCreateBilling = (postData) => {
    try{
    const listAllCodeSupport = Object.values(constant.CPT_CODE);
    let params = {};
    if(!listAllCodeSupport.includes(Number(postData.code))){
        return false;
    }
    if(postData.code == constant.CPT_CODE.CPT_99453){
        params = [];
    }
    if(postData.code == constant.CPT_CODE.CPT_99457 || postData.code == constant.CPT_CODE.CPT_99458){
        if(!postData.add_task_date || !postData.add_task_staff_name || !postData.add_task_note 
            || !postData.add_task_id){
                return false;
        }
        params = [{task_id: postData.add_task_id, task_date: postData.add_task_date, 
            staff_name: postData.add_task_staff_name, task_note: postData.add_task_note, task_time_spend: postData.task_time_spend}]
    }
    if(postData.code == constant.CPT_CODE.CPT_99091){
        if(!postData.staff_name || !postData.date || !postData.task_time_spend || !postData.task_id){
            return false;
        }
        params = [{task_id: postData.task_id, date: postData.date || '', 
        staff_name: postData.staff_name || '', task_note: postData.task_note || '', task_time_spend: postData.task_time_spend || 0}];
    }
    if(postData.bill_date) postData.bill_date = new Date(postData.bill_date);
    postData.params = JSON.stringify(params);
} catch(err){
    console.log(err);
}
    return postData;
}

const prepareDataForUpdateBillingTask = (postData, billingData) => {
    let result = [];
    const date = new Date();
    const params = JSON.parse(billingData[0].params);
    if(billingData[0].code == CPT_CODE.CPT_99457 || billingData[0].code == CPT_CODE.CPT_99458){
        if(postData.task_id){
            const newData = {
                task_id: postData.task_id,
                task_date: postData.task_date,
                staff_name: postData.staff_name,
                task_note: postData.add_task_note,
                task_time_spend: postData.task_time_spend
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
                task_note: postData.add_task_note,
                task_time_spend: postData.task_time_spend
            }
            params.push(newData);
            result = params;
        }
    }
    if(billingData[0].code == CPT_CODE.CPT_99091){
        if(postData.task_id){
            const newData = {
                task_id: postData.task_id, date: postData.date || '', 
        staff_name: postData.staff_name || '', task_note: postData.task_note || '', task_time_spend: postData.task_time_spend || 0
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
                task_id: date.getTime(), date: postData.date || '', 
        staff_name: postData.staff_name || '', task_note: postData.task_note || '', task_time_spend: postData.task_time_spend || 0
            }
            params.push(newData);
            result = params;
        }
    }
    
    if(billingData[0].code == CPT_CODE.CPT_99453){
        if(postData.task_id){
            const newData = {
                task_id: postData.task_id, note: postData.note || '', status: postData.status || 0
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
                task_id: date.getTime(), note: postData.note || '', status: postData.status || 0
            }
            params.push(newData);
            result = params;
        }
    }
    return JSON.stringify(result);
}

const prepareDataCreateTaskBillingSummary = (postData) => {
    let updateData = {};
    if(postData.code == constant.CPT_CODE.CPT_99453){
        updateData[`task_${constant.CPT_CODE.CPT_99453}`] = 1;
    }

    if(postData.code == constant.CPT_CODE.CPT_99457 || postData.code == constant.CPT_CODE.CPT_99458){
        updateData[`task_${postData.code}`] = postData.task_time_spend;
    }

    if(postData.code == constant.CPT_CODE.CPT_99091){
        updateData[`task_${postData.code}`] = postData.task_time_spend;
    }
    return updateData;
}

const prepareDataUpdateTaskBillingSummary = (billingData) => {
    let updateData = {};
    if(billingData.code == constant.CPT_CODE.CPT_99453){
        updateData[`task_${constant.CPT_CODE.CPT_99453}`] = 1;
    }

    if(billingData.code == constant.CPT_CODE.CPT_99457 || billingData.code == constant.CPT_CODE.CPT_99458 
        || billingData.code == constant.CPT_CODE.CPT_99091){
        let taskDataCurrent = JSON.parse(billingData.params);
        let totalTime = 0;
        taskDataCurrent.map(item => {
            totalTime += item.task_time_spend
        })
        updateData[`task_${billingData.code}`] = totalTime;
    }
    return updateData;
}

async function createBilling(req, res, next) {
    const t = await sequelizeDB.transaction()
    const pid = req.body.pid;
    const tenant_id = req.body.tenant_id || null;
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
        setImmediate(() => {
            let date = new Date()
            let dataUpdateBillingSummary = prepareDataCreateTaskBillingSummary(req.body)
            db_update_billing_summary(pid, date.toISOString(), dataUpdateBillingSummary);
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
    return responseAPI(res, req.apiRes)
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
        setImmediate( async () => {
            let date = new Date()
            const existBillingSaved = await db_search_billing_id(req.body);
            let dataUpdateBillingSummary = prepareDataUpdateTaskBillingSummary(existBillingSaved[0])
            db_update_billing_summary(pid, date.toISOString(), dataUpdateBillingSummary);
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
    return responseAPI(res, req.apiRes)
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


async function getBillingTotalSummaryByPractitioner(req, res, next) {
    try {
        req.query.list = []
        req.query.pids = []
        const list = await db_get_practitioner_list(req.query)
        req.query.pids.push(list.data[0].pid)
        list.data.forEach(obj => {
            req.query.list.push(obj.practictioner_id)
            if(!req.query.pids.includes(obj.pid)){
                req.query.pids.push(obj.pid)
            }
        });
        const result = await db_get_billing_report_summary_by_practitioner(req.query)
        const patchData = await db_get_patch_data({pid: req.query.pids});
        req.apiRes = BILLING_CODE["2"]
        req.apiRes["response"] = {
        billingData: result,
        patchData: patchData.data
        // count: billingCount
    }
    } catch (error) {
        console.log(error)
        req.apiRes = BILLING_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING BILLING INVENTORY",
        }
    }
    return responseAPI(res, req.apiRes)
}


module.exports = {
    createBilling,
    updateBilling,
    getBilling,
    getBillingData,
    updateBillingInformation,
    getBillingTotalSummary,
    updateBillingTask,
    getBillingTotalSummaryByPractitioner
}
