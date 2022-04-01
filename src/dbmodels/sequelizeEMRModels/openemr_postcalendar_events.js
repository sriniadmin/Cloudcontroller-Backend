const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openemr_postcalendar_events', {
    pc_eid: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pc_catid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_multiple: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    pc_aid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pc_pid: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pc_gid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pc_title: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pc_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pc_hometext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_comments: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pc_counter: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    pc_topic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    pc_informant: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pc_eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pc_endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pc_duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pc_recurrtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    pc_startTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    pc_endTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    pc_alldayevent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_conttel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pc_contname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pc_contemail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pc_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pc_fee: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pc_eventstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_sharing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_language: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pc_apptstatus: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "-"
    },
    pc_prefcatid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pc_facility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "facility id for this event"
    },
    pc_sendalertsms: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NO"
    },
    pc_sendalertemail: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NO"
    },
    pc_billing_location: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    pc_room: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'openemr_postcalendar_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pc_eid" },
        ]
      },
      {
        name: "basic_event",
        using: "BTREE",
        fields: [
          { name: "pc_catid" },
          { name: "pc_aid" },
          { name: "pc_eventDate" },
          { name: "pc_endDate" },
          { name: "pc_eventstatus" },
          { name: "pc_sharing" },
          { name: "pc_topic" },
        ]
      },
      {
        name: "pc_eventDate",
        using: "BTREE",
        fields: [
          { name: "pc_eventDate" },
        ]
      },
      {
        name: "index_pcid",
        using: "BTREE",
        fields: [
          { name: "pc_pid" },
        ]
      },
    ]
  });
};
