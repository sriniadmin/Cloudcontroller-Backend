const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('medication', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pid: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    drug_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    occurrence: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    morning: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    afternoon: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    evening: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    dosage_morning: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dosage_afternoon: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dosage_evening: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
          isDate: true
      }
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now")
    }
  }, {
    sequelize,
    tableName: 'medication',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      }
    ]
  });
};