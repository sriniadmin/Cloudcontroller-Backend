const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lbt_data', {
    form_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "references transactions.id"
    },
    field_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      primaryKey: true,
      comment: "references layout_options.field_id"
    },
    field_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lbt_data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_id" },
          { name: "field_id" },
        ]
      },
    ]
  });
};
