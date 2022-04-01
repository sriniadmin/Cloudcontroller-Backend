const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents_legal_detail', {
    dld_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dld_pid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dld_facility: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dld_provider: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dld_encounter: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dld_master_docid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    dld_signed: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "0-Not Signed or Cannot Sign(Layout),1-Signed,2-Ready to sign,3-Denied(Pat Regi),4-Patient Upload,10-Save(Layout)"
    },
    dld_signed_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    dld_filepath: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    dld_filename: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dld_signing_person: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dld_sign_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Sign flow level"
    },
    dld_content: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Layout sign position"
    },
    dld_file_for_pdf_generation: {
      type: DataTypes.BLOB,
      allowNull: false,
      comment: "The filled details in the fdf file is stored here.Patient Registration Screen"
    },
    dld_denial_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dld_moved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dld_patient_comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Patient comments stored here"
    }
  }, {
    sequelize,
    tableName: 'documents_legal_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dld_id" },
        ]
      },
    ]
  });
};
