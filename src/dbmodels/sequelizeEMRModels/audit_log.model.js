const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const AuditLog = sequelize.define("audit_log", {
		route : {
      type: Sequelize.STRING
		},
		route_str : {
      type: Sequelize.STRING
		},
		verb : {
      type: Sequelize.STRING
		},
    user_email : {
      type: Sequelize.STRING
    },
    user_role : {
      type: Sequelize.STRING
    },
    tenant : {
      type: Sequelize.STRING
    },
    req_body : {
      type: Sequelize.TEXT
    },
	  rsp_body : {
      type: Sequelize.TEXT
    },
		rsp_code : {
			type: Sequelize.INTEGER
		},
    pid : {
      type: Sequelize.STRING
    }
  });

  return AuditLog;
};
