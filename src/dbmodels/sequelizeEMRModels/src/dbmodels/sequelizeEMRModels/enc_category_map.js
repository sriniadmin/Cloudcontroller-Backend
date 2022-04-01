const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_category_map', {
    rule_enc_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "encounter id from rule_enc_types list in list_options"
    },
    main_cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "category id from event category in openemr_postcalendar_categories"
    }
  }, {
    sequelize,
    tableName: 'enc_category_map',
    timestamps: false,
    indexes: [
      {
        name: "rule_enc_id",
        using: "BTREE",
        fields: [
          { name: "rule_enc_id" },
          { name: "main_cat_id" },
        ]
      },
    ]
  });
};
