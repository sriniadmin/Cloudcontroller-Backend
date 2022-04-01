const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccda_components', {
    ccda_components_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ccda_components_field: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ccda_components_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ccda_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0=>sections,1=>components"
    }
  }, {
    sequelize,
    tableName: 'ccda_components',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ccda_components_id" },
        ]
      },
    ]
  });
};
