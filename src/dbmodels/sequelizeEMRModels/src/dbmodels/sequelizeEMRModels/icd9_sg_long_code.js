const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd9_sg_long_code', {
    sq_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    sg_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    long_desc: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'icd9_sg_long_code',
    timestamps: false,
    indexes: [
      {
        name: "sq_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sq_id" },
        ]
      },
    ]
  });
};
