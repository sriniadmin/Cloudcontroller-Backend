const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents_legal_master', {
    dlm_category: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dlm_subcategory: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dlm_document_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dlm_document_name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    dlm_filepath: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    dlm_facility: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dlm_provider: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dlm_sign_height: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    dlm_sign_width: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    dlm_filename: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dlm_effective_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dlm_version: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dlm_savedsign: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "0-Yes 1-No"
    },
    dlm_review: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "0-Yes 1-No"
    },
    dlm_upload_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0-Provider Uploaded,1-Patient Uploaded"
    }
  }, {
    sequelize,
    tableName: 'documents_legal_master',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dlm_document_id" },
        ]
      },
    ]
  });
};
