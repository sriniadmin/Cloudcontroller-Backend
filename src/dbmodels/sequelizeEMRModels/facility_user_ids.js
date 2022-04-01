const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility_user_ids', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    facility_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    field_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      comment: "references layout_options.field_id"
    },
    field_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'facility_user_ids',
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
        name: "uid",
        using: "BTREE",
        fields: [
          { name: "uid" },
          { name: "facility_id" },
          { name: "field_id" },
        ]
      },
    ]
  });
};
