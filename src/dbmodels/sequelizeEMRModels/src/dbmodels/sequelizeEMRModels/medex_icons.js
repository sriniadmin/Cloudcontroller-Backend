const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medex_icons', {
    i_UID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msg_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    msg_status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    i_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    i_html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    i_blob: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medex_icons',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "i_UID" },
        ]
      },
    ]
  });
};
