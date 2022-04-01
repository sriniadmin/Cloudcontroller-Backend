const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    country_code: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    federal_ein: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_location: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    billing_location: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    accepts_assignment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pos_code: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    x12_sender_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    attn: {
      type: DataTypes.STRING(65),
      allowNull: true
    },
    domain_identifier: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    facility_npi: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    facility_taxonomy: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tax_id_type: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    primary_business_entity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Not Set as business entity 1-Set as business entity"
    },
    facility_code: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    extra_validation: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    mail_street: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mail_street2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mail_city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mail_state: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    mail_zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "HIEs CCDA and FHIR an OID is required\/wanted"
    }
  }, {
    sequelize,
    tableName: 'facility',
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
