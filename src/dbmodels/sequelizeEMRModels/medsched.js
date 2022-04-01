const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const MedSched = sequelize.define("medsched", {
    prescription_id : {
      type: DataTypes.INTEGER
    },
		endedAt : {
      type: DataTypes.DATE
		}
  });

  return MedSched;
};
