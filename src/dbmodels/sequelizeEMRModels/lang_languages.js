const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang_languages', {
    lang_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lang_code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    lang_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lang_is_rtl: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'lang_languages',
    timestamps: false,
    indexes: [
      {
        name: "lang_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_id" },
        ]
      },
    ]
  });
};
