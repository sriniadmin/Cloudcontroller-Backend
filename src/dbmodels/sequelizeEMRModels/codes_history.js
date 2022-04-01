const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codes_history', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    modifier: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    diagnosis_reporting: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    financial_reporting: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code_text_short: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    prices: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    update_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'codes_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
