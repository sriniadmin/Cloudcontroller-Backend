const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_providers', {
    ppid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    npi: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    send_app_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Sending application ID (MSH-3.1)"
    },
    send_fac_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Sending facility ID (MSH-4.1)"
    },
    recv_app_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Receiving application ID (MSH-5.1)"
    },
    recv_fac_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Receiving facility ID (MSH-6.1)"
    },
    DorP: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "D",
      comment: "Debugging or Production (MSH-11)"
    },
    direction: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "B",
      comment: "Bidirectional or Results-only"
    },
    protocol: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "DL"
    },
    remote_host: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    login: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    orders_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    results_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lab_director: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'procedure_providers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ppid" },
        ]
      },
    ]
  });
};
