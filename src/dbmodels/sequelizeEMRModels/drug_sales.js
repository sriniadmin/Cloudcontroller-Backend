const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drug_sales', {
    sale_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drug_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prescription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sale_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fee: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    billed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "indicates if the sale is posted to accounting"
    },
    xfer_inventory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    distributor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references users.id"
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    bill_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pricelevel: {
      type: DataTypes.STRING(31),
      allowNull: true,
      defaultValue: ""
    },
    selector: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
      comment: "references drug_templates.selector"
    }
  }, {
    sequelize,
    tableName: 'drug_sales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sale_id" },
        ]
      },
    ]
  });
};
