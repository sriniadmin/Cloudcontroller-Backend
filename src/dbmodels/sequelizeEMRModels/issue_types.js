const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issue_types', {
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    category: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    plural: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: ""
    },
    singular: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: ""
    },
    abbreviation: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: ""
    },
    style: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    force_show: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ordering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aco_spec: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "patients|med"
    }
  }, {
    sequelize,
    tableName: 'issue_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category" },
          { name: "type" },
        ]
      },
    ]
  });
};
