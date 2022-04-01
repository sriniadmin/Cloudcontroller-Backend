const Sequelize = require('sequelize');
/**
 * @openapi
 *  components:
 *   schemas:
 *    Approval:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         default: 1
 *       descr:
 *         type: string
 *         default: Health India
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approval_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    descr: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "Health India"
    }
  }, {
    sequelize,
    tableName: 'approval_type',
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
