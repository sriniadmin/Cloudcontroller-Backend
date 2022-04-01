const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valueset', {
    nqf_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    code_system: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    code_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valueset: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valueset_name: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valueset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nqf_code" },
          { name: "code" },
          { name: "valueset" },
        ]
      },
    ]
  });
};
