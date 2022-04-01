const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eligibility_verification', {
    verification_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    response_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    insurance_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    eligibility_check_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    copay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deductible: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deductiblemet: {
      type: "ENUM('Y','N')",
      allowNull: true,
      defaultValue: "Y"
    },
    create_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'eligibility_verification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "verification_id" },
        ]
      },
      {
        name: "insurance_id",
        using: "BTREE",
        fields: [
          { name: "insurance_id" },
        ]
      },
    ]
  });
};
