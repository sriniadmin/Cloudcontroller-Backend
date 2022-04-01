const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_itemized', {
    report_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemized_test_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    numerator_label: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "",
      comment: "Only used in special cases"
    },
    pass: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 is fail, 1 is pass, 2 is excluded"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'report_itemized',
    timestamps: false,
    indexes: [
      {
        name: "report_id",
        using: "BTREE",
        fields: [
          { name: "report_id" },
          { name: "itemized_test_id" },
          { name: "numerator_label" },
          { name: "pass" },
        ]
      },
    ]
  });
};
