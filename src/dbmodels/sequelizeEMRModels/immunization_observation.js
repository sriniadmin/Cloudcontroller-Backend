const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('immunization_observation', {
    imo_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    imo_im_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imo_pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imo_criteria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imo_criteria_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imo_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imo_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imo_codetext: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imo_codetype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imo_vis_date_published: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imo_vis_date_presented: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imo_date_observation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'immunization_observation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "imo_id" },
        ]
      },
    ]
  });
};
