const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    table_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "openemr table name"
    },
    field_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "openemr table's field name"
    },
    field_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "openemr table's field value"
    },
    audit_master_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Id of the audit_master table"
    },
    entry_identification: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "1",
      comment: "Used when multiple entry occurs from the same table.1 means no multiple entry"
    }
  }, {
    sequelize,
    tableName: 'audit_details',
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
    ]
  });
};
