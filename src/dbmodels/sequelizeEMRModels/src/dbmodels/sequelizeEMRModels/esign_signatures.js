const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('esign_signatures', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Table row ID for signature"
    },
    table: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "table name for the signature"
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "user id for the signing user"
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "datetime of the signature action"
    },
    is_lock: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "sig, lock or amendment"
    },
    amendment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "amendment text, if any"
    },
    hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "hash of signed data"
    },
    signature_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "hash of signature itself"
    }
  }, {
    sequelize,
    tableName: 'esign_signatures',
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
        name: "tid",
        using: "BTREE",
        fields: [
          { name: "tid" },
        ]
      },
      {
        name: "table",
        using: "BTREE",
        fields: [
          { name: "table" },
        ]
      },
    ]
  });
};
