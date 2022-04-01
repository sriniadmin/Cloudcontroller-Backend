const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_portal_menu', {
    patient_portal_menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_portal_menu_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    menu_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    menu_order: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    menu_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'patient_portal_menu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patient_portal_menu_id" },
        ]
      },
    ]
  });
};
