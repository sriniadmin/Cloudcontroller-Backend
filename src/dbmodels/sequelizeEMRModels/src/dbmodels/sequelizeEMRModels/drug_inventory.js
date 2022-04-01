const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drug_inventory', {
    inventory_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drug_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lot_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    expiration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    on_hand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    warehouse_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    vendor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    last_notify: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    destroy_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    destroy_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destroy_witness: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destroy_notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'drug_inventory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventory_id" },
        ]
      },
    ]
  });
};
