const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('benefit_eligibility', {
    response_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    verification_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    benefit_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    coverage_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coverage_type: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    plan_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coverage_period: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    network_ind: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    response_status: {
      type: "ENUM('A','D')",
      allowNull: true,
      defaultValue: "A"
    },
    response_create_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    response_modify_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'benefit_eligibility',
    timestamps: false
  });
};
