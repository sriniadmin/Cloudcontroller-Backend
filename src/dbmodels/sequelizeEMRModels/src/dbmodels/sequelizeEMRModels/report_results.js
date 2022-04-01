const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_results', {
    report_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    field_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    field_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report_results',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "report_id" },
          { name: "field_id" },
        ]
      },
    ]
  });
};
