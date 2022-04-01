const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_mag_impplan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    form_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codetype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codedesc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    codetext: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    PMSFH_link: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMPPLAN_order: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_mag_impplan',
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
      {
        name: "second_index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_id" },
          { name: "pid" },
          { name: "title" },
          { name: "plan", length: 20 },
        ]
      },
    ]
  });
};
