const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_aro_groups_id_seq', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gacl_aro_groups_id_seq',
    timestamps: false
  });
};
