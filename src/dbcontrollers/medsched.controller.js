//a-z standard modules
const logger = require("../config/logger")
const url = require("url")

const sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const { Op } = require("sequelize")
const MedSched = models.medsched;

/*
exports.MedSchedObj = () => {
  this.userEmail = undefined
  this.userRole = undefined
  this.tenant = undefined
  this.reqBody = undefined
  this.pid = undefined
}
*/
MedSchedObj = {
  prescription_id: undefined,
  endedAt: undefined
}

module.exports.MedSchedObj = MedSchedObj;


// Create and Save a new MedSched
exports.create = async (medSchedObj) => {
  // Create a MedSched
  const medSched = {
    prescription_id: medSchedObj.prescription_id,
    endedAt: medSchedObj.endedAt
  };

  // logger.debug("INSIDE CREATE", medSched);

  // Save MedSched in the database
  try {
    await MedSched.create(medSched)
  } catch(err) {
      logger.error("Failed", err) 	    
  }
};

// Retrieve all MedScheds from the database.
exports.findAll = async (prsc_id, filter) => {
  let where = {}

  // logger.debug("MedSched findall", prsc_id, filter)

  if (prsc_id) {
    where.prescription_id = prsc_id
  }
  
  if (filter.hasOwnProperty('from') && filter.hasOwnProperty('to')) {
    where.createdAt = {
      [Op.between]: [filter.from, filter.to]
    }
  }

  try {
    return MedSched.findAll({ 
      where: where, 
      order: ["id"],
      raw: true
    })
  } catch(err) {
      logger.error('MedSched Info Get error :', err)
      return {}
  };
};

// Find a single MedSched with an id
exports.findOne = (req, res) => {
  
};


// Update a MedSched by the id in the request
exports.update = async (medSchedId, medSchedObj, transaction) => {

    // Create a MedSched
    const medSched = {
      endedAt: medSchedObj.endedAt
  }

  // logger.debug(medSchedId, medSchedObj)

  try {
    let medNew = await MedSched.update(medSchedObj,
                          {
                              where: {
                                id: medSchedId
                              },
                          })
                          /*
                          { transaction: transaction["transaction"] }
                        )*/
  } catch(err) {
      logger.debug("MedSched update error: %s",err)
  }

  return medSched
};

// Delete a MedSched with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all MedScheds from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published MedScheds
exports.findAllPublished = (req, res) => {
  
};
