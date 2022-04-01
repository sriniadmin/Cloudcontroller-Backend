const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lbf_data', {
    form_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "references forms.form_id"
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
    tableName: 'lbf_data',
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
