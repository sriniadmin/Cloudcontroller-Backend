const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_signatures', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "waiting"
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    created: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastmod: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    signator: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sig_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sig_hash: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(46),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onsite_signatures',
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
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "user" },
        ]
      },
      {
        name: "encounter",
        using: "BTREE",
        fields: [
          { name: "encounter" },
        ]
      },
    ]
  });
};
