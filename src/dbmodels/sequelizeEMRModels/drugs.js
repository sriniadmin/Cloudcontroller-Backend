const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb");


/**
 * @openapi
 *  components:
 *   schemas:
 *    Drug_create:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         default: ""
 *       ndc_number:
 *         type: string
 *         default: ""
 *       on_order:
 *         type: integer
 *         default: 0
 *       reorder_point:
 *         type: float
 *         default: 0
 *       max_level:
 *         type: float
 *         default: 0
 *       last_notify:
 *         type: date
 *         default: "2021-03-31"
 *       reactions:
 *         type: string
 *         default: ""
 *       form:
 *         type: integer
 *         default: 0
 *       size:
 *         type: string
 *         default: "SIZE"
 *       unit:
 *         type: integer
 *         default: 0
 *       route:
 *         type: integer
 *         default: 0
 *       substitute:
 *         type: integer
 *         default: 0
 *       related_code:
 *         type: string
 *         default: ""
 *       cyp_factor:
 *         type: float
 *         default: 0
 *       active:
 *         type: integer
 *         default: 1
 *       allow_combining:
 *         type: int
 *         default: 0
 *       allow_multiple:
 *         type: int
 *         default: 1
 *       drug_code:
 *         type: string
 *         default: "2763451"
 *       consumable:
 *         type: integer
 *         default: 0
 *       dispensable:
 *         type: integer
 *         default: 1
 *       drug_id:
 *         type: integer
 *         default: 1
 */


module.exports = function (sequelize, DataTypes) {
  return sequelize.define('drugs', {
    drug_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ndc_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    on_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reorder_point: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    max_level: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    last_notify: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    reactions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    form: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    size: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    route: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    substitute: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    related_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "may reference a related codes.code"
    },
    cyp_factor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "quantity representing a years supply"
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0 = inactive, 1 = active"
    },
    allow_combining: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = allow filling an order from multiple lots"
    },
    allow_multiple: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1 = allow multiple lots at one warehouse"
    },
    drug_code: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    consumable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = will not show on the fee sheet"
    },
    dispensable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0 = pharmacy elsewhere, 1 = dispensed here"
    }
  }, {
    sequelize,
    tableName: 'drugs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "drug_id" },
        ]
      },
    ]
  });
};
