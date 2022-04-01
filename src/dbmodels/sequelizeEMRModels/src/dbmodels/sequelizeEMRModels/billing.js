const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    code_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    code_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    billed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bill_process: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    bill_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    process_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modifier: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    units: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fee: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    justify: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    x12_partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ndc_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notecodes: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pricelevel: {
      type: DataTypes.STRING(31),
      allowNull: true,
      defaultValue: ""
    },
    revenue_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "",
      comment: "Item revenue code"
    }
  }, {
    sequelize,
    tableName: 'billing',
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
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
