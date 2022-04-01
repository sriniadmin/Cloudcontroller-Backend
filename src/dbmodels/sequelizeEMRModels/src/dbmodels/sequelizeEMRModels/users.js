const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    federaltaxid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    federaldrugid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    upin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    see_auth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    npi: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    specialty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_direct: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assistant: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    organization: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valedictory: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    streetb: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    street2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    streetb2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    zip2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phonew1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phonew2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phonecell: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cal_ui: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    taxonomy: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "207Q00000X"
    },
    calendar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = appears in calendar"
    },
    abook_type: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    pwd_expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pwd_history1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pwd_history2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_warehouse: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    irnpool: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    state_license_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    weno_prov_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    newcrop_user_role: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cpoe: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    physician_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    main_menu_role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "standard"
    },
    patient_menu_role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "standard"
    },
    tenant_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
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
