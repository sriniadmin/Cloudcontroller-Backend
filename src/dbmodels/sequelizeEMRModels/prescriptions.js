const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Prescription_create:
 *     type: object
 *     properties:
 *       prescription_uuid:
 *         type: string
 *         default: 2132
 *       pid:
 *         type: string
 *         default: 2132
 *       date_added:
 *         type: date
 *         default: "2021-03-02"
 *       date_modified:
 *         type: date
 *         default: "2021-03-02"
 *       drug:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Fields'
 *       drug_uuid:
 *         type: integer
 *         default: 1
 *       quantity:
 *         type: string
 *         default: 20
 *       note_uuid:
 *         type: string
 *         default: note321r8r13u8989u880
 *       active:
 *         type: integer
 *         default: 1
 *       prac_uuid:
 *         type: string
 *         default: prac31489147bqugug190
 *       end_date:
 *         type: date
 *         default: "2021-03-02"
 *       txDate:
 *         type: date
 *         default: "2021-03-02"
 *       tenant_uuid:
 *         type: string
 *         default: 123
 *       id:
 *         type: integer
 *         default: 1
 *
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Fields:
 *     type: object
 *     properties:
 *       drugName:
 *         type: string
 *         default: ramipril
 *       strength:
 *         type: string
 *         default: 5mg
 *       dosage:
 *         type: string
 *         default: 3
 *       route:
 *         type: string
 *         default: oral
 *       occurrence:
 *         type: string
 *         default: after a meal
 *       frequency:
 *         type: string
 *         default: day(s)
 *       type:
 *         type: string
 *         default: Tablet
 *       details:
 *         type: string
 *         default: ""
 *       tradeName:
 *         type: string
 *         default: OTC monograph
 *       dosage_evening:
 *         type: int
 *         default: 1
 *       dosage_morning:
 *         type: int
 *         default: 1
 *       dosage_afternoon:
 *         type: int
 *         default: 1
 *       frequencyPeriod:
 *         type: string
 *         default: 2
 */



module.exports = function (sequelize, DataTypes) {
  return sequelize.define('prescriptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prescription_uuid: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    filled_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    pharmacy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    date_added: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    date_modified: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    drug: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    drug_uuid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      validate: {
        isNumeric: true
      }
    },
    rxnorm_drugcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    form: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    dosage: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.STRING(31),
      allowNull: true,
      validate: {
        isNumeric: true
      }
    },
    size: {
      type: DataTypes.STRING(25),
      allowNull: true,
      validate: {
        isAlphanumeric: true
      }
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    route: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    substitute: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    refills: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    per_refill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    filled_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    medication: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    note_uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        isInt: true
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn("now"),
    },
    prac_uuid: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        is: /^[0-9a-zA-Z]+$/
      }
    },
    prescriptionguid: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        is: /^[0-9a-zA-Z]+$/
      }
    },
    erx_source: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0-OpenEMR 1-External",
      validate: {
        isInt: true
      }

    },
    erx_uploaded: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0-Pending NewCrop upload 1-Uploaded to NewCrop",
      validate: {
        isInt: true
      }
    },
    drug_info_erx: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isAlpha: true
      }
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    indication: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ntx: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    rtx: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    },
    txDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    tenant_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pid: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prescriptions',
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
        name: "prescription",
        using: "BTREE",
        fields: [
          { name: "prescription" },
        ]
      },
    ]
  });
};
