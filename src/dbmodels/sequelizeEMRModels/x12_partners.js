const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('x12_partners', {
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
    id_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    x12_sender_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    x12_receiver_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    processing_format: {
      type: "ENUM('standard','medi-cal','cms','proxymed','oa_eligibility','availity_eligibility')",
      allowNull: true
    },
    x12_isa01: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00",
      comment: "User logon Required Indicator"
    },
    x12_isa02: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "          ",
      comment: "User Logon"
    },
    x12_isa03: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00",
      comment: "User password required Indicator"
    },
    x12_isa04: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "          ",
      comment: "User Password"
    },
    x12_isa05: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "ZZ"
    },
    x12_isa07: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "ZZ"
    },
    x12_isa14: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    x12_isa15: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "P"
    },
    x12_gs02: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    x12_per06: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    x12_dtp03: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "A"
    }
  }, {
    sequelize,
    tableName: 'x12_partners',
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
