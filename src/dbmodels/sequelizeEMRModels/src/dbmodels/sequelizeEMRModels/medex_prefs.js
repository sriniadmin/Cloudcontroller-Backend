const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medex_prefs', {
    MedEx_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ME_username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "ME_username"
    },
    ME_api_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ME_facilities: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ME_providers: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ME_hipaa_default_override: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PHONE_country_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    MSGS_default_yes: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    POSTCARDS_local: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    POSTCARDS_remote: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    LABELS_local: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    LABELS_choice: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    combine_time: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    postcard_top: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MedEx_lastupdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'medex_prefs',
    timestamps: false,
    indexes: [
      {
        name: "ME_username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ME_username" },
        ]
      },
    ]
  });
};
