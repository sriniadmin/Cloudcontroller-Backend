const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    success: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    checksum: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    crt_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log_from: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "open-emr"
    },
    menu_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ccda_doc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "CCDA document id from ccda"
    }
  }, {
    sequelize,
    tableName: 'log',
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
