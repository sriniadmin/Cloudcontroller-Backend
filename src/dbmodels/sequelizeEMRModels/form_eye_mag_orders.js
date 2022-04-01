const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_mag_orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ORDER_DETAILS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ORDER_STATUS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORDER_PRIORITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORDER_DATE_PLACED: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ORDER_PLACED_BYWHOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORDER_DATE_COMPLETED: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ORDER_COMPLETED_BYWHOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_mag_orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "VISIT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "ORDER_DETAILS" },
          { name: "ORDER_DATE_PLACED" },
        ]
      },
    ]
  });
};
