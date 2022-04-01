const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    type: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumb_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mimetype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    revision: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    foreign_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    docdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "40-character SHA-1 hash of document"
    },
    list_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    couch_docid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    couch_revid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    storagemethod: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0->Harddisk,1->CouchDB"
    },
    path_depth: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "Depth of path to use in url to find document. Not applicable for CouchDB."
    },
    imported: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Parsing status for CCR\/CCD\/CCDA importing"
    },
    encounter_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Encounter id if tagged"
    },
    encounter_check: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "If encounter is created while tagging"
    },
    audit_master_approval_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "approval_status from audit_master table"
    },
    audit_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documentationOf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    encrypted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0->No,1->Yes"
    }
  }, {
    sequelize,
    tableName: 'documents',
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
        name: "revision",
        using: "BTREE",
        fields: [
          { name: "revision" },
        ]
      },
      {
        name: "foreign_id",
        using: "BTREE",
        fields: [
          { name: "foreign_id" },
        ]
      },
      {
        name: "owner",
        using: "BTREE",
        fields: [
          { name: "owner" },
        ]
      },
    ]
  });
};
