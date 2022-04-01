const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccda_table_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ccda_component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ccda_component_section: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    form_dir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    form_type: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    form_table: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'ccda_table_mapping',
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
