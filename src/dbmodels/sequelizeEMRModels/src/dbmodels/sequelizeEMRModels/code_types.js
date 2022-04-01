const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('code_types', {
    ct_key: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      comment: "short alphanumeric name"
    },
    ct_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "numeric identifier",
      unique: "ct_id"
    },
    ct_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "sort order"
    },
    ct_mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "length of modifier field"
    },
    ct_just: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      comment: "ct_key of justify type, if any"
    },
    ct_mask: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "",
      comment: "formatting mask for code values"
    },
    ct_fee: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if fees are used"
    },
    ct_rel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if can relate to other code types"
    },
    ct_nofs: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if to be hidden in the fee sheet"
    },
    ct_diag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this is a diagnosis type"
    },
    ct_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1 if this is active"
    },
    ct_label: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "label of this code type"
    },
    ct_external: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 if stored codes in codes tables, 1 or greater if codes stored in external tables"
    },
    ct_claim: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this is used in claims"
    },
    ct_proc: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this is a procedure type"
    },
    ct_term: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this is a clinical term"
    },
    ct_problem: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this code type is used as a medical problem"
    },
    ct_drug: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if this code type is used as a medication"
    }
  }, {
    sequelize,
    tableName: 'code_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ct_key" },
        ]
      },
      {
        name: "ct_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ct_id" },
        ]
      },
    ]
  });
};
