const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tasks = models.tasks



async function db_get_task(tenant_id, params) {
  let { limit, offset, filter,pid} = params
  logger.debug('tenant id is',tenant_id)
  let whereStatement = { tenant_id: tenant_id,pid:pid }
  let task
  try {
      task = await Tasks.findAll({
          where: whereStatement,
      })
  } catch (err) {
      throw new Error("Error in fetching the task" + err)
  }
  return task
}




async function db_update_task(tenant_id, task_data, transaction) {
    task_data = JSON.stringify(task_data)
    task_data = JSON.parse(task_data)
    logger.debug('the task data is',task_data)
    let trans = null
    let pid=await db_task_pid_exist(task_data['pid'])
    logger.debug('the pid in the tasks is',pid)
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let tasks
    if(!pid){
        tasks=await Tasks.create(task_data,{transaction:trans})
    } else {
        tasks=await Tasks.update(task_data,{
            where:{
                pid:task_data['pid']
            }
        })
    }
    return tasks
   
  }

  async function db_task_pid_exist(pid) {
    let task_data
    try {
        task_data = await Tasks.count({
            where: {
                pid: pid,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("tasks  " + pid + "not found Err:" + err)
    }
    return task_data
}



module.exports={db_get_task,db_task_pid_exist,db_update_task}