const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
const bcrypt = require("bcrypt")
/**
 * @openapi
 *  components:
 *   schemas:
 *    User_create:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         default: Mr
 *       fname:
 *         type: string
 *         default: firstname
 *       lname:
 *         type: string
 *         default: LastName
 *       username:
 *         type: string
 *         default: UserName
 *       password:
 *         type: string
 *         default: Password
 *       city:
 *         type: string
 *         default: City
 *       active:
 *         type: integer
 *         default: 1
 *       state:
 *         type: string
 *         default: State
 *       specialty:
 *         type: string
 *         default: Orthopedician
 *       role:
 *         type: string
 *         default: doctor
 *       facility:
 *         type: string
 *         default: Facility
 *       physician_type:
 *         type: string
 *         default: Cardio
 *       phone:
 *         type: string
 *         default: 9654321890
 *       email:
 *         type: string
 *         default: username@tenant.com
 *       tenant_id:
 *         type: string
 *         default: 1
 *       required:
 *          lname
 *          active
 *          role
 *          username
 *          password
 *          tenant_id
 *
 */

/**
  * @openapi
  *  components:
  *   schemas:
  *    User:
  *     type: object
  *     properties:
  *       username:
  *         type: string
  *         default: superadmin@demohospital.com
  *       password:
  *         type: string
  *         format: password
  *         default: admin123
  *       required:
  *         - email
  *         - password
  */

/**
  * @openapi
  *  components:
  *   schemas:
  *    Password_Reset:
  *     type: object
  *     properties:
  *       email:
  *         type: string
  *         default: live247@demohospital.com
  *       DOB:
  *         type: string
  *         default: 2021-08-23
  *       phone:
  *         type: string
  *         default: 9654321890
  */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "users",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    set(value) {
                        if (value.length >= 4 && value.length <= 20) {
                            this.setDataValue('password', bcrypt.hashSync(value, 10));
                        } else {
                            throw new Error('Your password should be between 8-20 characters!');
                        }
                    }
                }
            },
            authorized: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            info: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            source: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            fname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            mname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    isAlpha: true,
                },
            },
            lname: {
                type: DataTypes.STRING(255),
                allowNull: false,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            suffix: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            federaltaxid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            federaldrugid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            upin: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            facility: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            facility_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                validate: {
                    isInt: true,
                },
            },
            see_auth: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1,
                validate: {
                    isInt: true,
                },
            },
            active: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    isInt: true,
                },
            },
            npi: {
                type: DataTypes.STRING(15),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            title: {
                type: DataTypes.STRING(30),
                allowNull: true,
                // validate: {
                //     isIn: [['Mr.', 'Mrs.','Mx.','Master','Miss','Dr.','Ms.']]
                // },
            },
            specialty: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            billname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: true,
                // validate: {
                //     isEmail: true,
                // },
            },
            email_direct: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            url: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            assistant: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            organization: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            valedictory: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            street: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            streetb: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            state: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^[a-z ,.'-]+$/i,
                },
            },
            zip: {
                type: DataTypes.STRING(20),
                allowNull: true,
                validate: {
                    isNumeric: true,
                },
            },
            street2: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            streetb2: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            city2: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            state2: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            zip2: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                },
            },
            fax: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            phonew1: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^\d{10}$/,
                },
            },
            phonew2: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^\d{10}$/,
                },
            },
            phonecell: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^\d{10}$/,
                },
            },
            notes: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            cal_ui: {
                type: DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1,
            },
            taxonomy: {
                type: DataTypes.STRING(30),
                allowNull: true,
                defaultValue: "207Q00000X",
            },
            calendar: {
                type: DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0,
                comment: "1 = appears in calendar",
            },
            abook_type: {
                type: DataTypes.STRING(31),
                allowNull: true,
                defaultValue: "",
            },
            pwd_expiration_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            pwd_history1: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            pwd_history2: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            default_warehouse: {
                type: DataTypes.STRING(31),
                allowNull: true,
                defaultValue: "",
            },
            irnpool: {
                type: DataTypes.STRING(31),
                allowNull: true,
                defaultValue: "",
            },
            state_license_number: {
                type: DataTypes.STRING(25),
                allowNull: true,
                validate: {
                    isNumeric: true,
                },
            },
            weno_prov_id: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            newcrop_user_role: {
                type: DataTypes.STRING(30),
                allowNull: true,
                validate: {
                    is: /^[a-z][a-z\s]*$/,
                },
            },
            cpoe: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            physician_type: {
                type: DataTypes.STRING(50),
                allowNull: true,
                validate: {
                    is: /^[a-zA-Z\s]*$/,
                },
            },
            main_menu_role: {
                type: DataTypes.STRING(50),
                allowNull: true,
                defaultValue: "standard",
            },
            patient_menu_role: {
                type: DataTypes.STRING(50),
                allowNull: true,
                defaultValue: "standard",
                validate: {
                    is: /^[a-zA-Z\s]*$/,
                },
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            role: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            user_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
            ],
        }
    )
}
