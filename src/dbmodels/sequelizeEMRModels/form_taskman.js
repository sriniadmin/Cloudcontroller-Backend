const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_taskman', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    REQ_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FROM_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    TO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PATIENT_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    DOC_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOC_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ENC_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    METHOD: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    COMPLETED: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "1 = completed"
    },
    COMPLETED_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COMMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USERFIELD_1: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_taskman',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
