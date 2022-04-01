const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_mag_prefs', {
    PEZONE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LOCATION: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LOCATION_text: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    selection: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ZONE_ORDER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GOVALUE: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "0"
    },
    ordering: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FILL_ACTION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "ADD"
    },
    GORIGHT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    GOLEFT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UNSPEC: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'form_eye_mag_prefs',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "PEZONE" },
          { name: "LOCATION" },
          { name: "selection" },
        ]
      },
    ]
  });
};
