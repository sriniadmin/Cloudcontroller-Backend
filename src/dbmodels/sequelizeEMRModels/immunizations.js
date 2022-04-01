const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('immunizations', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    administered_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    immunization_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cvx_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    manufacturer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lot_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    administered_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    administered_by: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Alternative to administered_by_id"
    },
    education_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vis_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date of VIS Statement"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount_administered: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    amount_administered_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    route: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    administration_site: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_erroneously: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    completion_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    information_source: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    refusal_reason: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    ordering_provider: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'immunizations',
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
        name: "patient_id",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
    ]
  });
};
