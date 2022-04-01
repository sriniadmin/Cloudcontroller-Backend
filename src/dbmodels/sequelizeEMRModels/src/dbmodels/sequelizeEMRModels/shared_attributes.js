const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shared_attributes', {
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "0 if patient attribute, else encounter attribute"
    },
    field_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      primaryKey: true,
      comment: "references layout_options.field_id"
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "time of last update"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "user who last updated"
    },
    field_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shared_attributes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "encounter" },
          { name: "field_id" },
        ]
      },
    ]
  });
};
