const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openemr_postcalendar_categories', {
    pc_catid: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pc_constant_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "pc_constant_id"
    },
    pc_catname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pc_catcolor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pc_catdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_recurrtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pc_recurrspec: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_recurrfreq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pc_end_date_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pc_end_date_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pc_end_date_freq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_end_all_day: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pc_dailylimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_cattype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Used in grouping categories"
    },
    pc_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    pc_seq: {
      type: DataTypes.INTEGER,
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
    tableName: 'openemr_postcalendar_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pc_catid" },
        ]
      },
      {
        name: "pc_constant_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pc_constant_id" },
        ]
      },
      {
        name: "basic_cat",
        using: "BTREE",
        fields: [
          { name: "pc_catname" },
          { name: "pc_catcolor" },
        ]
      },
    ]
  });
};
