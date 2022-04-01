//a-z standard modules
const Sequelize = require("sequelize")
const url = require("url")

const sequelizeDB = require("../config/emrmysqldb")
const initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
const models = initModels(sequelizeDB)

//const db = require("../dbmodels/sequelizeEMRModels/audit_log.model.js");
const AuditLog = models.audit_log;
const Op = Sequelize.Op;

/*
exports.AuditLogObj = () => {
  this.userEmail = undefined
  this.userRole = undefined
  this.tenant = undefined
  this.reqBody = undefined
  this.pid = undefined
}
*/
AuditLogObj = {
  userEmail: undefined,
  userRole: undefined,
  route: undefined,
  route_str: undefined,
  verb: undefined,
  tenant: undefined,
  reqBody: undefined,
  rspBody: undefined,
  rspCode: undefined,
  pid: undefined
}

module.exports.AuditLogObj = AuditLogObj;

// Create and Save a new AuditLog
exports.create = (req, res, auditLogObj) => {
  // Create an AuditLog
  const auditLog = {
    user_email: auditLogObj.userEmail,
    user_role: auditLogObj.userRole,
    tenant: auditLogObj.tenant,
    route: auditLogObj.route,
    route_str: auditLogObj.route_str,
    verb: auditLogObj.verb,
    req_body: auditLogObj.reqBody,
    rsp_body: auditLogObj.rspBody,
    rsp_code: auditLogObj.rspCode,
    pid: auditLogObj.pid
  };

  //console.log("Published", req.body.published);

  console.log("IN", auditLog);
  console.log("CTRL", AuditLog);

  // Save AuditLog in the database
  AuditLog.create(auditLog)
    .then(data => {
      console.log("Created entry", auditLog) 	    
    })
    .catch(err => {
      console.log("Failed to create entry", err) 	    
    });
};

// Retrieve all AuditLogs from the database.
exports.findAll = (req, res) => {
  const q = url.parse(req.url, true).query;
  const filter = req.params.filter

  let where = {}
  
  console.log("[AUDIT FINDALL]: ", req.params.filter)
  if (filter.hasOwnProperty('from') && filter.hasOwnProperty('to')) {
    where.createdAt = {
      [Op.between]: [filter.from, filter.to]
    }
  }

  if (filter.hasOwnProperty('email')) { 
    where["user_email"] = { [Op.like]: filter.email } 
  }

  if (filter.hasOwnProperty('role')) {
    where["user_role"] = { [Op.like]: filter.role }
  }

  if (filter.hasOwnProperty('route')) {
    where["route"] = { [Op.startsWith]: filter.route }
  }

  if (filter.hasOwnProperty('verb')) {
    where["verb"] = { [Op.like]: filter.verb }
  }

  if (filter.hasOwnProperty('tenant')) {
    where["tenant"] = { [Op.like]: filter.tenant }
  }

  console.log("AuditLog findall", where)
  try {
    return AuditLog.findAll({ 
      where: where, 
      order: ["id"],
      raw: true
    })
  }
  catch(err) {
    logger.debug('AuditLog error :', err)
    return null
  }
};

// Find a single AuditLog with an id
exports.findOne = (req, res) => {
  
};

// Update a AuditLog by the id in the request
exports.update = (req, res) => {
  
};

// Delete a AuditLog with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all AuditLogs from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published AuditLogs
exports.findAllPublished = (req, res) => {
  
};
