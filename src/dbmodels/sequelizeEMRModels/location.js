const Sequelize = require('sequelize');

/**
 * @openapi
 *  components:
 *   schemas:
 *    Bed2:
 *     type: object
 *     properties:
 *      bed_count:
 *         type: string
 *         default: 5
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Bed1:
 *     type: object
 *     properties:
 *      bed_count:
 *         type: string
 *         default: 3
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Bed:
 *     type: object
 *     properties:
 *      bed_count:
 *         type: string
 *         default: 10
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Ward:
 *     type: object
 *     properties:
 *      ward_1:
 *         type: string
 *         "$ref": '#/components/schemas/Bed'
 *      ward_2:
 *         type: string
 *         "$ref": '#/components/schemas/Bed1'
 *      ward_3:
 *         type: string
 *         "$ref": '#/components/schemas/Bed2'
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Ward_2:
 *     type: object
 *     properties:
 *      ward_1:
 *         type: string
 *         "$ref": '#/components/schemas/Bed'
 *      ward_2:
 *         type: string
 *         "$ref": '#/components/schemas/Bed1'
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Floor_2:
 *     type: object
 *     properties:
 *      ward_count:
 *         type: string
 *         default: 2
 *      wards:
 *         type: object
 *         "$ref": '#/components/schemas/Ward_2' 
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Floor1:
 *     type: object
 *     properties:
 *      ward_count:
 *         type: string
 *         default: 3
 *      wards:
 *         type: object
 *         "$ref": '#/components/schemas/Ward' 
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Floors:
 *     type: object
 *     properties:
 *      floor_1:
 *         type: object
 *         "$ref": '#/components/schemas/Floor1'
 *      floor_2:
 *         type: object
 *         "$ref": '#/components/schemas/Floor_2'
 *       
 *     
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Floor:
 *     type: object
 *     properties:
 *      floor_count:
 *         type: string
 *         default: 2
 *      floors:
 *         type: object
 *         "$ref": '#/components/schemas/Floors'
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Location:
 *     type: object
 *     properties:
 *      building_1:
 *         type: object
 *         "$ref": '#/components/schemas/Floor'
 *       
 *     
 *       
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Location_create:
 *     type: object
 *     properties:
 *       facility_uuid:
 *         type: string
 *         default: 12314
 *       active:
 *         type: int
 *         default: 1
 *       archive:
 *         type: int
 *         default: 1
 *       building_count:
 *         type: string
 *         default: 1
 *       location_uuid:
 *         type: string
 *         default: 1
 *       tenant_uuid:
 *         type: string
 *         default: 1
 *       initial_bed_list:
 *         type: array
 *         items: 
 *          default:[]
 *       used_bed_list:
 *         type: array
 *         items: 
 *          default:[]
 *       buildings:
 *         type: object
 *         "$ref": '#/components/schemas/Location'
 
 */


/**
 * @openapi
 *  components:
 *   schemas:
 *    Location_Bulk:
 *     type: object
 *     properties:
 *       facility_uuid:
 *         type: string
 *         default: 12314
 *       active:
 *         type: int
 *         default: 1
 *       archive:
 *         type: int
 *         default: 1
 *       building_count:
 *         type: string
 *         default: 1
 *       location_uuid:
 *         type: string
 *         default: 1
 *       tenant_uuid:
 *         type: string
 *         default: 1
 *       status:
 *         type: string
 *         default: Remote
 *       initial_bed_list:
 *         type: array
 *         items: 
 *          default:[]
 *       used_bed_list:
 *         type: array
 *         items: 
 *          default:[]
 *       building:
 *         type: string
 *         default: 12314
 *       floor:
 *         type: string
 *         default: 0
 *       ward:
 *         type: string
 *         default: 0
 *       bed_countt:
 *         type: string
 *         default: 1
 *       floor_tag:
 *         type: string
 *         default: ambulance
 *       ward_tag:
 *         type: string
 *         default: ambulance
 *       date:
 *         type: string
 *         default: 2021-12-20 13:18:15
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Remote_Location_Delete:
 *     type: object
 *     properties:
 *       tenant_uuid:
 *         type: string
 *         default: 1
 */




module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    location_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tenant_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    archive: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    active: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    building: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    floor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ward: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bed_count: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    facility_uuid: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ward_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    building_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    floor_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ward_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    floor_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    building_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    current_date:{
      type:DataTypes.DATE,
      allowNull: true,
      defaultValue:Sequelize.fn('now')
    },
    bed_uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    initial_bed_list: {
      type: DataTypes.JSON,
      allowNull: true
    },
    used_bed_list: {
      type: DataTypes.JSON,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'location',
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
