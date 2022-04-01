const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('standardized_tables_track', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    imported_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "name of standardized tables such as RXNORM"
    },
    revision_version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "revision of standardized tables that were imported"
    },
    revision_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "revision of standardized tables that were imported"
    },
    file_checksum: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'standardized_tables_track',
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
