const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('globals', {
    gl_name: {
      type: DataTypes.STRING(63),
      allowNull: false,
      primaryKey: true
    },
    gl_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    gl_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'globals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gl_name" },
          { name: "gl_index" },
        ]
      },
    ]
  });
};
