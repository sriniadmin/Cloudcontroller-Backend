const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lists', {
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
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subtype: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    begdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    returndate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    occurrence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    classification: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    referredby: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extrainfo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diagnosis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
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
    outcome: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reinjury_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    injury_part: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    injury_type: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    injury_grade: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    reaction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    external_allergyid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    erx_source: {
      type: "ENUM('0','1')",
      allowNull: false,
      defaultValue: "0",
      comment: "0-OpenEMR 1-External"
    },
    erx_uploaded: {
      type: "ENUM('0','1')",
      allowNull: false,
      defaultValue: "0",
      comment: "0-Pending NewCrop upload 1-Uploaded TO NewCrop"
    },
    modifydate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    severity_al: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    list_option_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Reference to list_options table"
    }
  }, {
    sequelize,
    tableName: 'lists',
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
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
