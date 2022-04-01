const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_groups_encounter', {
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
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facility: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    onset_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sensitivity: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    billing_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_catid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      comment: "event category from openemr_postcalendar_categories"
    },
    last_level_billed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=none, 1=ins1, 2=ins2, etc"
    },
    last_level_closed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=none, 1=ins1, 2=ins2, etc"
    },
    last_stmt_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stmt_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "default and main provider for this visit"
    },
    supervisor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "supervising provider, if any, for this visit"
    },
    invoice_refno: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    referral_source: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    billing_facility: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pos_code: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    counselors: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appt_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_groups_encounter',
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
          { name: "group_id" },
          { name: "encounter" },
        ]
      },
      {
        name: "encounter_date",
        using: "BTREE",
        fields: [
          { name: "date" },
        ]
      },
    ]
  });
};
