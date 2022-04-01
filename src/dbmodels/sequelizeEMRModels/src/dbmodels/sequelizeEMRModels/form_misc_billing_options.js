const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_misc_billing_options', {
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
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    employment_related: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    auto_accident: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    accident_state: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    other_accident: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    medicaid_referral_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    epsdt_flag: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    provider_qualifier_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    outside_lab: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    lab_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    is_unable_to_work: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    onset_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_initial_treatment: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    off_work_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    off_work_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    is_hospitalized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    hospitalization_date_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hospitalization_date_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    medicaid_resubmission_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    medicaid_original_reference: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prior_auth_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    replacement_claim: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    icn_resubmission_number: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    box_14_date_qual: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    box_15_date_qual: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_misc_billing_options',
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
