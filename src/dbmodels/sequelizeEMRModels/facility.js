const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb");
/**
 * @openapi
 *  components:
 *   schemas:
 *    Facility_create:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         default: ""
 *       phone:
 *         type: string
 *         default: ""
 *       fax:
 *         type: string
 *         default: 0
 *       street:
 *         type: string
 *         default: 0
 *       city:
 *         type: string
 *         default: 0
 *       state:
 *         type: string
 *         default: ""
 *       postal_code:
 *         type: string
 *         default: ""
 *       country_code:
 *         type: string
 *         default: ""
 *       federal_ein:
 *         type: string
 *         default: ""
 *       website:
 *         type: string
 *         default: ""
 *       email:
 *         type: string
 *         default: ""
 *       service_location:
 *         type: int
 *         default: 1
 *       billing_location:
 *         type: integer
 *         default: 1
 *       accepts_assignment:
 *         type: int
 *         default: 0
 *       pos_code:
 *         type: int
 *         default: 0
 *       x_12_sender_id:
 *         type: int
 *         default: 0
 *       attn:
 *         type: string
 *         default: ""
 *       domain_identifier:
 *         type: string
 *         default: ""
 *       facility_npi:
 *         type: string
 *         default: ""
 *       primary_business_entity:
 *         type: int
 *         default: 1
 *       oid:
 *         type: string
 *         default: 1
 *       tenant_id:
 *         type: string
 *         default: 1
 *       facility_uuid:
 *         type: string
 *         default: 1
 *       tax_id_type:
 *         type: string
 *         default: 213
 *       extra_validation:
 *         type: int
 *         default: 1
 *       facility_code:
 *         type: string
 *         default: 1234
 *       facility_map:
 *         type: json
 *         default: {}
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Facility_update:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         default: ""
 *       phone:
 *         type: string
 *         default: ""
 *       fax:
 *         type: string
 *         default: 0
 *       street:
 *         type: string
 *         default: 0
 *       city:
 *         type: string
 *         default: 0
 *       state:
 *         type: string
 *         default: ""
 *       postal_code:
 *         type: string
 *         default: ""
 *       country_code:
 *         type: string
 *         default: ""
 *       federal_ein:
 *         type: string
 *         default: ""
 *       website:
 *         type: string
 *         default: ""
 *       email:
 *         type: string
 *         default: ""
 *       service_location:
 *         type: int
 *         default: 1
 *       billing_location:
 *         type: integer
 *         default: 1
 *       accepts_assignment:
 *         type: int
 *         default: 0
 *       pos_code:
 *         type: int
 *         default: 0
 *       x_12_sender_id:
 *         type: int
 *         default: 0
 *       attn:
 *         type: string
 *         default: ""
 *       domain_identifier:
 *         type: string
 *         default: ""
 *       facility_npi:
 *         type: string
 *         default: ""
 *       primary_business_entity:
 *         type: int
 *         default: 1
 *       oid:
 *         type: string
 *         default: 1
 *       tenant_id:
 *         type: string
 *         default: 1
 *       tax_id_type:
 *         type: string
 *         default: 213
 *       extra_validation:
 *         type: int
 *         default: 1
 *       facility_code:
 *         type: string
 *         default: 1234
 *       facility_map:
 *         type: json
 *         default: {}
 */


module.exports = function (sequelize, DataTypes) {
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
      allowNull: true,
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
      allowNull: true,
      defaultValue: 1
    },
    billing_location: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    accepts_assignment: {
      type: DataTypes.TINYINT,
      allowNull: true,
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
      allowNull: true,
      defaultValue: ""
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: true,
      defaultValue: ""
    },
    primary_business_entity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0-Not Set as business entity 1-Set as business entity"
    },
    facility_code: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    extra_validation: {
      type: DataTypes.TINYINT,
      allowNull: true,
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
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    facility_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    facility_map: {
      type: DataTypes.JSON,
      allowNull: true
    },
    oid: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
