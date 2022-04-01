const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccda_sections', {
    ccda_sections_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ccda_components_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ccda_sections_field: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ccda_sections_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ccda_sections_req_mapping: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'ccda_sections',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ccda_sections_id" },
        ]
      },
    ]
  });
};
