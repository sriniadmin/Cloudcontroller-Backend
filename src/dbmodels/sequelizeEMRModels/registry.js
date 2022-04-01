const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registry', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    directory: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sql_run: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    unpackaged: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patient_encounter: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    therapy_group_encounter: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aco_spec: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "encounters|notes"
    }
  }, {
    sequelize,
    tableName: 'registry',
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
