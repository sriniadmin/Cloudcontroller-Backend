const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurance_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: "ENUM('primary','secondary','tertiary')",
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    policy_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_lname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_mname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_fname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_relationship: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_ss: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    subscriber_street: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_postal_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer_street: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer_postal_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscriber_employer_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    copay: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    subscriber_sex: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    accept_assignment: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "TRUE"
    },
    policy_type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'insurance_data',
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
        name: "pid_type_date",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "type" },
          { name: "date" },
        ]
      },
    ]
  });
};
