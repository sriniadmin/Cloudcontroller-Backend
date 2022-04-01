const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forms', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    form_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    form_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
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
    deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "flag indicates form has been deleted"
    },
    formdir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    therapy_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    issue_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references lists.id to identify a case"
    },
    provider_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references users.id to identify a provider"
    }
  }, {
    sequelize,
    tableName: 'forms',
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
        name: "pid_encounter",
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "encounter" },
        ]
      },
      {
        name: "form_id",
        using: "BTREE",
        fields: [
          { name: "form_id" },
        ]
      },
    ]
  });
};
