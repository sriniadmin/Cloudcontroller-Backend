const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code_text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    code_text_short: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: ""
    },
    code: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    code_type: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    modifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    units: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fee: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    superbill: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    related_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    taxrates: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cyp_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "quantity representing a years supply"
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0 = inactive, 1 = active"
    },
    reportable: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = non-reportable, 1 = reportable"
    },
    financial_reporting: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = negative, 1 = considered important code in financial reporting"
    },
    revenue_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "",
      comment: "Item revenue code"
    }
  }, {
    sequelize,
    tableName: 'codes',
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
        name: "code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "code_type",
        using: "BTREE",
        fields: [
          { name: "code_type" },
        ]
      },
    ]
  });
};
