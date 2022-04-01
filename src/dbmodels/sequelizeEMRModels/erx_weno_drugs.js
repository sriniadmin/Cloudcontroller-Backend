const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('erx_weno_drugs', {
    drug_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rxcui_drug_coded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    generic_rxcui: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    drug_db_code_qualifier: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    rxn_dose_form: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    full_generic_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    route: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    new_dose_form: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    strength: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    supress_for: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display_name_synonym: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_retired: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sxdg_rxcui: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sxdg_tty: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sxdg_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    psn_drugdescription: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ncpdp_quantity_term: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    potency_unit_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dea_schedule_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dea_schedule: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ingredients: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    drug_interaction: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_source_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    code_list_qualifier: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'erx_weno_drugs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "drug_id" },
        ]
      },
    ]
  });
};
