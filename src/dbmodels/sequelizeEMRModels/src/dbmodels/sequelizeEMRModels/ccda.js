const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccda', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ccda_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    couch_docid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    couch_revid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    view: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    transfer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    emr_transfer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ccda',
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
        name: "unique_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "encounter" },
          { name: "time" },
        ]
      },
    ]
  });
};
