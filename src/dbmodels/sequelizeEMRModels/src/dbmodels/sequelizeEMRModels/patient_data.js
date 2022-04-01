const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_data', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    language: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    financial: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    fname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    lname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    postal_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    drivers_license: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ss: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    occupation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_home: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    phone_biz: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    phone_contact: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    phone_cell: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pharmacy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    contact_relationship: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    referrer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    referrerID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    providerID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ref_providerID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    email_direct: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ethnoracial: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ethnicity: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    religion: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    interpretter: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    migrantseasonal: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    family_size: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    monthly_income: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    billing_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    homeless: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    financial_review: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pubpid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0,
      unique: "pid"
    },
    genericname1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    genericval1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    genericname2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    genericval2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    hipaa_mail: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    hipaa_voice: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    hipaa_notice: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    hipaa_message: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    hipaa_allowsms: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NO"
    },
    hipaa_allowemail: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NO"
    },
    squad: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    fitness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    referral_source: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    usertext1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext3: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext4: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext5: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext6: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext7: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext8: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist3: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist4: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist5: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist6: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userlist7: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pricelevel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "standard"
    },
    regdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Registration Date"
    },
    contrastart: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date contraceptives initially used"
    },
    completed_ad: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "NO"
    },
    ad_reviewed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vfc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mothersname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    guardiansname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allow_imm_reg_use: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    allow_imm_info_share: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    allow_health_info_ex: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    allow_patient_portal: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    deceased_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deceased_reason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    soap_import_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1-Prescription Press 2-Prescription Import 3-Allergy Press 4-Allergy Import"
    },
    cmsportal_login: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    care_team: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    industry: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imm_reg_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imm_reg_stat_effdate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publicity_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publ_code_eff_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    protect_indicator: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prot_indi_effdate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianrelationship: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardiansex: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianaddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardiancity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianstate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianpostalcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardiancountry: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianphone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianworkphone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    guardianemail: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_data',
    timestamps: false,
    indexes: [
      {
        name: "pid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
