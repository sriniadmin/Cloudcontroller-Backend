const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    facility: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    provider: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    encounter: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    doc_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_signed_status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    patient_signed_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    authorize_signed_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    accept_signed_status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    authorizing_signator: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    denial_reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authorized_signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    patient_signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    full_document: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onsite_documents',
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
