const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_clinical_instructions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'form_clinical_instructions',
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
