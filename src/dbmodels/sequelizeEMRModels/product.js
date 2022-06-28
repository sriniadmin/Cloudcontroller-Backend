
/**
 * @openapi
 *  components:
 *   schemas:
 *    Product:
 *     type: object
 *     properties:
 *       ndc_product_code:
 *         type: string
 *         default: 24794-712
 *       form:
 *         type: string
 *         default: GEL
 *       generic_name:
 *         type: string
 *         default: Guanfacine
 *       product_name:
 *         type: string
 *         default: Guanfacine
 *       route:
 *         type: string
 *         default: ORAL
 *       active_ingredient_count:
 *         type: integer
 *         default: 1
 *       marketing_status:
 *         type: string
 *         default: ANDA
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ndc_product_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    form: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    generic_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    route: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    marketing_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active_ingredient_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      }
    ]
  });
};
