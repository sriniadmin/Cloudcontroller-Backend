const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurance_companies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cms_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ins_type_code: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    x12_receiver_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    x12_default_partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alt_cms_id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    inactive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eligibility_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    x12_default_eligibility_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurance_companies',
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
