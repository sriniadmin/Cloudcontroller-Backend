const Sequelize = require("sequelize")

const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         default: Mr.
 *       fname:
 *         type: string
 *         default: FirstName
 *       lname:
 *         type: string
 *         default: LastName
 *       DOB:
 *         type: string
 *         default: "2021-08-23"
 *       street:
 *         type: string
 *         default: Street Info
 *       city:
 *         type: string
 *         default: City
 *       postal_code:
 *         type: string
 *         default: 123456
 *       state:
 *         type: string
 *         default: State
 *       country_code:
 *         type: string
 *         default: country_code
 *       sex:
 *         type: string
 *         default: Male
 *       phone_contact:
 *         type: string
 *         default: Contact Phone Number
 *       status:
 *         type: string
 *         default: Latest Status
 *       mothersname:
 *         type: string
 *         default: mothersname
 *       deceased_reason:
 *         type: string
 *         default: deceased_reason
 *       guardiansname:
 *         type: string
 *         default: guardiansname
 *       guardianrelationship:
 *         type: string
 *         default: guardianrelationship
 *       guardiansex:
 *         type: string
 *         default: guardiansex
 *       guardianaddress:
 *         type: string
 *         default: guardianaddress
 *       guardiancity:
 *         type: string
 *         default: guardiancity
 *       guardianstate:
 *         type: string
 *         default: guardianstate
 *       guardianpostalcode:
 *         type: string
 *         default: guardianpostalcode
 *       guardiancountry:
 *         type: string
 *         default: guardiancountry
 *       guardianphone:
 *         type: string
 *         default: guardianphone
 *       family_size:
 *         type: string
 *         default: LastName
 *       location_uuid:
 *          type: string
 *       email:
 *         type: string
 *         default: LastName
 *       patientuidtype:
 *         type: string
 *         default: patientuidtype
 *       patientuid:
 *         type: string
 *         default: patientuid
 *       tenant_id:
 *         type: integer
 *         default: 1
 *       required:
 *         - lname
 *         - phone_contact
 *         - ss
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Demographic_map:
 *     type: object
 *     properties:
 *       fname:
 *         type: string
 *         default: John
 *       title:
 *         type: string
 *         default: Mr.
 *       lname:
 *         type: string
 *         default: WB
 *       tenant_id:
 *         type: string
 *         default: 3
 *       bed_uuid:
 *         type: string
 *         default: 3
 *       med_record:
 *         type: string
 *         default: 3
 *       deceased_reason:
 *         type: string
 *         default: deceased_reason
 *       guardiansname:
 *         type: string
 *         default: guardiansname
 *       guardianrelationship:
 *         type: string
 *         default: guardianrelationship
 *       guardiansex:
 *         type: string
 *         default: guardiansex
 *       guardianaddress:
 *         type: string
 *         default: guardianaddress
 *       guardiancity:
 *         type: string
 *         default: guardiancity
 *       guardianstate:
 *         type: string
 *         default: guardianstate
 *       guardianpostalcode:
 *         type: string
 *         default: guardianpostalcode
 *       guardiancountry:
 *         type: string
 *         default: guardiancountry
 *       guardianphone:
 *         type: string
 *         default: 9876543210
 *       email:
 *         type: string
 *         default: john@foo.com
 *       DOB:
 *         type: string
 *         default: "2021-01-23"
 *       street:
 *         type: string
 *         default: Street Info
 *       city:
 *         type: string
 *         default: las vegas
 *       postal_code:
 *         type: string
 *         default: 123456
 *       idtype:
 *         type: string
 *         default: AAdhar
 *       idnumber:
 *         type: string
 *         default: 123456
 *       state:
 *         type: string
 *         default: State
 *       country_code:
 *         type: string
 *         default: 1
 *       sex:
 *         type: string
 *         default: male
 *       phone_contact:
 *         type: string
 *         default: 1234567890
 *       phone_cell:
 *         type: string
 *         default: 1234567890
 *       location_uuid:
 *          type: string
 *       status:
 *         type: string
 *         default: active
 *       mothersname:
 *         type: string
 *         default: mothersname
 *       admission_date:
 *         type: string
 *         default: "2021-08-21"
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Update_Patient:
 *     type: object
 *     properties:
 *       fname:
 *         type: string
 *         default: John
 *       title:
 *         type: string
 *         default: Mr
 *       lname:
 *         type: string
 *         default: WB
 *       tenant_id:
 *         type: string
 *         default: 3
 *       bed_uuid:
 *         type: string
 *         default: 3
 *       med_record:
 *         type: string
 *         default: 3
 *       deceased_reason:
 *         type: string
 *         default: deceased_reason
 *       guardiansname:
 *         type: string
 *         default: guardiansname
 *       guardianrelationship:
 *         type: string
 *         default: guardianrelationship
 *       guardiansex:
 *         type: string
 *         default: guardiansex
 *       guardianaddress:
 *         type: string
 *         default: guardianaddress
 *       guardiancity:
 *         type: string
 *         default: guardiancity
 *       guardianstate:
 *         type: string
 *         default: guardianstate
 *       guardianpostalcode:
 *         type: string
 *         default: guardianpostalcode
 *       guardiancountry:
 *         type: string
 *         default: guardiancountry
 *       guardianphone:
 *         type: string
 *         default: 9876543210
 *       email:
 *         type: string
 *         default: john@foo.com
 *       DOB:
 *         type: string
 *         default: "2021-01-23"
 *       street:
 *         type: string
 *         default: Street Info
 *       city:
 *         type: string
 *         default: las vegas
 *       postal_code:
 *         type: string
 *         default: 123456
 *       idtype:
 *         type: string
 *         default: AAdhar
 *       idnumber:
 *         type: string
 *         default: 123456
 *       state:
 *         type: string
 *         default: State
 *       country_code:
 *         type: string
 *         default: 1
 *       sex:
 *         type: string
 *         default: male
 *       phone_contact:
 *         type: string
 *         default: 1234567890
 *       phone_cell:
 *         type: string
 *         default: 1234567890
 *       location_uuid:
 *          type: string
 *       status:
 *         type: string
 *         default: active
 *       mothersname:
 *         type: string
 *         default: mothersname
 *       admission_date:
 *         type: string
 *         default: "2021-08-21"
 *       deceased_date:
 *         type: string
 *         default: "2021-08-21"
 *       discharge_date:
 *         type: string
 *         default: "2021-07-21"
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient_Transaction:
 *     type: object
 *     properties:
 *       demographic_map:
 *         type: string
 *         "$ref": '#/components/schemas/Demographic_map'
 *
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient_Delete:
 *     type: object
 *     properties:
 *       demographic_map:
 *         type: string
 *         "$ref": '#/components/schemas/Demographic_map'
 *
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient_Update:
 *     type: object
 *     properties:
 *       demographic_map:
 *         type: string
 *         "$ref": '#/components/schemas/Update_Patient'
 *
 */

//
// *       ews_map:
// *         type: string
// *         "$ref": '#/components/schemas/Ews_create'
// *       location_map:
// *         type: string
// *         "$ref": '#/components/schemas/Location_create'
// *         type: array
// *         items:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "patient_data",
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    isIn: [['Mr.', 'Mrs.', 'Mx.', 'Master', 'Miss', 'Dr.', 'Ms.']]
                }
            },
            language: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            financial: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            fname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                // validate: {
                //     is: /^$|[a-z ,.'-]+$/i,
                // },
            },
            lname: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: "",
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            mname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            DOB: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: true,
                },
            },
            street: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            postal_code: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    is: /^$|[0-9]+$/,
                },
            },
            city: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    is: /^$|[a-z ,.'-]+$/i,
                },
            },
            state: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    is: /^$|[a-z ,.'-]+$/i,
                },
            },
            country_code: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                // validate: {
                //     isAlphanumeric: true,
                // },
            },
            idtype: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            idnumber: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            occupation: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            phone_home: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            phone_biz: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            phone_contact: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    is: /^$|\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                },
            },
            phone_cell: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            pharmacy_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            status: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                validate: {
                    isAlpha: true,
                },
            },
            contact_relationship: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            admission_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                validate: {
                    isDate: true,
                },
            },
            sex: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: "Male",
            },
            referrer: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            referrerID: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            providerID: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            ref_providerID: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
                // validate: {
                //     isEmail: true,
                // },
            },
            email_direct: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            ethnoracial: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            race: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            ethnicity: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            religion: {
                type: DataTypes.STRING(40),
                allowNull: true,
                defaultValue: "",
            },
            interpretter: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            migrantseasonal: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            family_size: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            monthly_income: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            billing_note: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            homeless: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            financial_review: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            pubpid: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: "0",
            },
            genericname1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            genericval1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            genericname2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            genericval2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            hipaa_mail: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "",
            },
            hipaa_voice: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "",
            },
            hipaa_notice: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "",
            },
            hipaa_message: {
                type: DataTypes.STRING(20),
                allowNull: true,
                defaultValue: "",
            },
            hipaa_allowsms: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "NO",
            },
            hipaa_allowemail: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "NO",
            },
            squad: {
                type: DataTypes.STRING(32),
                allowNull: true,
                defaultValue: "",
            },
            fitness: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            referral_source: {
                type: DataTypes.STRING(30),
                allowNull: true,
                defaultValue: "",
            },
            usertext1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext3: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext4: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext5: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext6: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext7: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            usertext8: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist1: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist2: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist3: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist4: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist5: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist6: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            userlist7: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            pricelevel: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "standard",
            },
            regdate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                comment: "Registration Date",
            },
            contrastart: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                comment: "Date contraceptives initially used",
            },
            completed_ad: {
                type: DataTypes.STRING(3),
                allowNull: true,
                defaultValue: "NO",
            },
            ad_reviewed: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            vfc: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            mothersname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            guardiansname: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            allow_imm_reg_use: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            allow_imm_info_share: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            allow_health_info_ex: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            allow_patient_portal: {
                type: DataTypes.STRING(31),
                allowNull: true,
                defaultValue: "",
            },
            deceased_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                validate: {
                    isDate: true
                }
            },
            deceased_reason: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            soap_import_status: {
                type: DataTypes.TINYINT,
                allowNull: true,
                comment:
                    "1-Prescription Press 2-Prescription Import 3-Allergy Press 4-Allergy Import",
            },
            cmsportal_login: {
                type: DataTypes.STRING(60),
                allowNull: true,
                defaultValue: "",
            },
            care_team: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            county: {
                type: DataTypes.STRING(40),
                allowNull: true,
                defaultValue: "",
            },
            industry: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            imm_reg_status: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            imm_reg_stat_effdate: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            publicity_code: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            publ_code_eff_date: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            protect_indicator: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            prot_indi_effdate: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            guardianrelationship: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /^$|[a-z]+$/i,
                },
            },
            guardiansex: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            guardianaddress: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /$|[a-zA-Z0-9\s]*$/
                },
            },
            guardiancity: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /^$|[a-z ,.'-]+$/i
                },
            },
            guardianstate: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /^$|[a-z ,.'-]+$/i,
                },
            },
            guardianpostalcode: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            guardiancountry: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /^$|[a-z ,.'-]+$/i,
                },
            },
            guardianphone: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    is: /^$|\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                },
            },
            guardianworkphone: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            guardianemail: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    isEmail: true
                }
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            location_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            bed_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            vital_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            med_record: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            discharge_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                // validate: {
                //     isDate: true,
                // },
            },
            disabled: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            associated_list: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            patient_type: {
                type: DataTypes.STRING(8),
                allowNull: false,
            },
            contry_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: "patient_data",
            timestamps: false,
            indexes: [
                {
                    name: "pid",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "pid" }],
                },
                {
                    name: "id",
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
            ],
        }
    )
}
