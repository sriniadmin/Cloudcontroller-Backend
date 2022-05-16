const logger = require("../config/logger")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const { Op } = require("sequelize")
const Patients_Data = models.patient_data // Verify the tenant before adding users
const { db_delete_vital } = require("./vital.controller")
const { db_delete_prescription } = require("./prescription.controller")
const { db_delete_notes } = require("./note.controller")
const { db_delete_patch_patient_map } = require("./patch_patient.controller")
const { db_delete_ews } = require("./ews.controller")
const { db_delete_vital_threshold } = require("./vital_threshold.controller")
models.patient_data.belongsTo(models.location, {
    foreignKey: "location_uuid",
    targetKey: "location_uuid",
})
models.patch_patient_map.hasMany(models.patch, {
    foreignKey: "patch_uuid",
    sourceKey: "patch_uuid",
})
models.patient_data.hasMany(models.patch_patient_map, {
    foreignKey: "pid",
    sourceKey: "pid",
})
models.notes.hasMany(models.patient_data, {
    foreignKey: "pid",
    sourceKey: "pid",
})
models.patient_data.belongsTo(models.notes, {
    foreignKey: "pid",
    targetKey: "pid",
})
models.patient_data.belongsTo(models.practictioner_patient_map, {
    foreignKey: "pid",
    targetKey: "pid",
})

models.patient_data.belongsTo(models.patient_location_table, {
    foreignKey: "pid",
    targetKey: "pid",
})

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "user_uuid",
    as: "useruuid",
})

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "prac_uuid",
    as: "pracuuid",
})



var Patient = function (patientobj) {
    // Basic Details
    this.fname = patientobj.fname
    this.lname = patientobj.lname
    this.phone_contact = patientobj.phone_contact
    this.email = patientobj.email
    this.DOB = patientobj.DOB
    this.sex = patientobj.sex
    this.drivers_license = patientobj.drivers_license
    this.ss = patientobj.ss
    this.street = patientobj.street
    this.city = patientobj.city
    this.state = patientobj.state
    this.country_code = patientobj.country_code
    this.postal_code = patientobj.postal_code
    this.pid = patientobj.pid
    this.location_uuid = patientobj.location_uuid
    this.bed_uuid = patientobj.bed_uuid
}

async function db_get_patient_list(tenant_id, username, query_param) {
    patient_list = []
    let patient_data
    tenant_id = query_param.body.tenantId
    logger.debug("the body of the patient is", query_param)

    let { limit, offset, filter, location_uuid } = query_param.body
    let whereStatement = { tenant_id: tenant_id }
    if (query_param.pid) whereStatement.pid = query_param.pid
    if (query_param.pidlist) whereStatement.pid = query_param.pidlist
    // logger.debug("the where pid is", whereStatement)
    // logger.debug("The QUERY is ", query_param.med_record, query_param.fname)
    if (
        query_param.med_record &&
        query_param.med_record !== "undefined" &&
        query_param.med_record.includes(query_param.fname)
    ) {
        // Search anywhere kind of option --> fname and location_uuid cannot be same otherwise

        fname = { fname: { [Op.like]: "%" + query_param.fname + "%" } }
        lname = { lname: { [Op.like]: "%" + query_param.lname + "%" } }
        discharge_date = {
            discharge_date: {
                [Op.like]: "%" + query_param.discharge_date + "%",
            },
        }

        sta = { status: { [Op.like]: "%" + query_param.status + "%" } }
        med = { med_record: { [Op.like]: "%" + query_param.med_record + "%" } }

        let condition = {
            [Op.or]: [],
        }
        condition[Op.or].push()
        // logger.debug("the condition is", condition)
        if (query_param.fname == query_param.lname) {
            if (query_param.fname) condition[Op.or].push(fname)
            if (query_param.lname) condition[Op.or].push(lname)
            if (query_param.status) condition[Op.or].push(sta)
            if (query_param.discharge_date)
                condition[Op.or].push[discharge_date]
        } else {
            let tempCond = {
                [Op.and]: [],
            }

            if (query_param.fname) tempCond[Op.and].push(fname)
            if (query_param.lname) tempCond[Op.and].push(lname)
            if (query_param.status) tempCond[Op.and].push(sta)
            // logger.debug("The Temp Condition is ", tempCond, tempCond[Op.and])

            condition[Op.or].push(tempCond)
        }
        logger.debug("CONDITION is ", condition, condition[Op.or])
        whereStatement[Op.or] = condition[Op.or]
    } else {
        // logger.debug("Query in else part")
        if (query_param.location_uuid)
            whereStatement.location_uuid = query_param.location_uuid

        if (query_param.fname)
            whereStatement.fname = { [Op.like]: "%" + query_param.fname + "%" }
        if (query_param.lname)
            whereStatement.lname = { [Op.like]: "%" + query_param.lname + "%" }
        if (query_param.status)
            whereStatement.status = {
                [Op.like]: "%" + query_param.status + "%",
            }
        if (query_param.discharge_date)
            whereStatement.discharge_date = {
                [Op.is]: null,
            }
        if (query_param.med_record)
            whereStatement.med_record = query_param.med_record
    }

    // logger.debug("The wherestatement is ", whereStatement)
    if (location_uuid && false) {
        patient_data = await Patients_Data.findAndCountAll({
            limit: limit,
            offset: parseInt(offset),
            attributes: ["fname", "lname", "id"],
            //order: ["id", "DESC"],
            where: whereStatement,
            raw: false,

            include: [
                {
                    model: models.location,
                    attributes: [
                        "location_uuid",
                        "tenant_uuid",
                        "archive",
                        "active",
                        "floor",
                        "ward",
                        "facility_uuid",
                    ],
                    required: false,
                },
            ],
        })
            .then((patient_data) => {
                logger.debug("The count is", patient_data.count)

                logger.debug("Patient list is" + patient_data)
                patient_list = patient_data
            })
            .catch((err) => {
                logger.debug(
                    "Patient list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error("Patient list fetch error -  tenant check")
            })
        return patient_list
    } else {
        try {
            patient_data = await Patients_Data.findAll({
                limit: parseInt(limit),
                offset: parseInt(offset),
                include: [
                    {
                        model: models.location,
                        attributes: [
                            "location_uuid",
                            "floor",
                            "ward",
                            "facility_uuid",
                            "building",
                        ],
                        required: false,
                    },

                    {
                        model: models.patch_patient_map,
                        attributes: ["patch_uuid", "config", "pid", "duration"],
                        // required:false,
                        include: [
                            {
                                model: models.patch,
                                // where: { deleted: 0 },
                            },
                        ],
                        raw: false,
                    },
                    {
                        model: models.notes,
                        include: [
                            {
                                model: models.users,
                                as: "useruuid",
                                attributes: [
                                    "fname",
                                    "lname",
                                    "username",
                                    "user_uuid",
                                ],
                                raw: false,
                            },
                            {
                                model: models.users,
                                as: "pracuuid",
                                attributes: [
                                    "fname",
                                    "lname",
                                    "username",
                                    "user_uuid",
                                ],
                                raw: false,
                            },
                        ],
                    },
                    {
                        model: models.practictioner_patient_map,
                    },

                    {
                        model: models.patient_location_table,
                        attributes: ["bed_no"],
                    },
                ],

                where: whereStatement,
                attributes: [
                    "id",
                    "fname",
                    "lname",
                    "mname",
                    "DOB",
                    "phone_contact",
                    "sex",
                    "pid",
                    "tenant_id",
                    "location_uuid",
                    "bed_uuid",
                    "med_record",
                    "date",
                    "title",
                    "admission_date",
                    "deceased_date",
                    "discharge_date",
                    "status",
                    "email"
                ],

                raw: false,
                // nest: true
            })
        } catch (error) {
            console.log(error)
            logger.debug(
                "Patient list fetch error " +
                tenant_id +
                "not found Err:" +
                error
            )
            throw new Error("DBQuery: Patient List Failed")
        }
        // logger.debug("Patient list is", patient_data.length)
        patient_list = patient_data
        return patient_list
    }
}

async function db_patient_count(tenant_uuid) {
    let total_patient_count
    try {
        total_patient_count = await Patients_Data.count({
            where: { disabled: 1 }
        })
    } catch (error) {
        logger.debug(
            "Patient list count failed error " +
            tenant_id +
            "not found Err:" +
            err
        )
        throw new Error("DBQuery: Patient List Count Failed")
    }
    logger.debug("Total Patient Count is %s", total_patient_count)
    return total_patient_count
}

async function db_patient_info(pid) {
    try {
        let patientInfo = await Patients_Data.findOne(
            {
                where: {
                    pid: pid,
                },
            }
        )
        return patientInfo
    }
    catch (err) {
        logger.debug(`Fetch Patient info ERROR : ${err.message}`)
    }
}

// type can be uuid or id or name
async function db_patient_exist(
    tenant_uuid,
    patient_identifier,
    type = "uuid"
) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    let data
    let whereStatement = {}
    if (type == "uuid") {
        whereStatement.pid = patient_identifier
    } else if (type == "id") {
        whereStatement.id = patient_identifier
    } else if (type == "name") {
        whereStatement.fname = patient_identifier
    } else {
        logger.debug("Unknow type to search", type)
    }
    if (tenant_uuid) {
        whereStatement.tenant_id = tenant_uuid
    }
    await Patients_Data.findOne({
        where: whereStatement,
        raw: true,
    })
        .then((patient_data) => {
            data = patient_data
        })
        .catch((err) => {
            console.log(err)
            throw new Error(err)
        })
    return data
}

async function db_get_patient_inventory(params) {
    let limit = params.limit
    let offset = (params.offset-1) * limit
    let condition = {
        tenant_id: params.tenantId,
        disabled: 1
    }
    if(params.name){
        condition = {
            tenant_id: params.tenantId,
            disabled: 1,
            [Op.or]: [
                {fname: {[Op.like]: params.name}}, {lname: {[Op.like]: params.name}}
            ]
        }
    }
    try {
        const data = await Patients_Data.findAll({
            where: condition,
            order: [
                ['date', 'DESC']
            ],
            limit: limit,
            offset: offset,
            raw: false,
        });
        return data
    } catch (error) {
        throw new Error(error)
    }
}

async function db_get_patient_details(params) {
    const data = await Patients_Data.findOne({
        where: { pid: params }
    });
    return data
}

//This db_get_patient_list_new needs to be removed - just verify once and remove the code

async function db_get_patient_list_new(tenant_id, username) {
    //patient_query_json
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    patient_list = ""
    const { limit, offset, filter } = params

    await Patients_Data.findAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: ["id"],
        raw: true,
    })
        .then((patient_data) => {
            logger.debug("Patient list is" + patient_data)
            patient_list = patient_data
        })
        .catch((err) => {
            logger.debug(
                "Patient list fetch error " + tenant_id + "not found Err:" + err
            )
            throw new Error("Patient list fetch error -  tenant check")
        })

    return patient_list
}

async function db_create_patient(tenant_id, patient_data, transaction) {
    patient_list = ""
    let pdata = new Patient(patient_data)
    logger.debug("Pid is", pdata["pid"])
    await Patients_Data.create(
        {
            fname: patient_data["fname"],
            lname: patient_data["lname"],
            title: patient_data["title"],
            phone_contact: patient_data["phone_contact"],
            phone_cell: patient_data["phone_cell"],
            email: patient_data["email"],
            DOB: patient_data["DOB"],
            sex: patient_data["sex"],
            drivers_license: patient_data["drivers_license"],
            ss: patient_data["ss"],
            street: patient_data["street"],
            city: patient_data["city"],
            state: patient_data["state"],
            country_code: patient_data["country_code"],
            postal_code: patient_data["postal_code"],
            pid: patient_data["pid"],
            status: patient_data["status"],
            location_uuid: patient_data["location_uuid"],
            bed_uuid: patient_data["bed_uuid"],
            med_record: patient_data["med_record"],
            guardiansname: patient_data["guardiansname"],
            guardianrelationship: patient_data["guardianrelationship"],
            guardiansex: patient_data["guardiansex"],
            guardianaddress: patient_data["guardianaddress"],
            guardianity: patient_data["guradiancity"],
            guardianpostalcode: patient_data["guardianpostalcode"],
            guradiancountry: patient_data["guardiancountry"],
            guardianphone: patient_data["guardianphone"],
            mothersname: patient_data["mothersname"],
            deceased_date: patient_data["deceased_date"],
            admission_date: patient_data["admission_date"],
            idtype: patient_data["idtype"],
            idnumber: patient_data["idnumber"],
            discharge_date: patient_data["discharge_date"],
            disabled: 1,
            tenant_id: tenant_id,
        },
        { transaction: transaction["transaction"] }
    )

        .then((patient_data) => {
            logger.debug("Patient insert output is" + patient_data)
            patient_list = patient_data
        })
        .catch((err) => {
            logger.debug("Patient insert error not found Err:" + err)
            throw new Error("" + err)
        })

    return patient_list
}

async function db_bulk_create_patient(patientData, transaction) {
    await Patients_Data.bulkCreate(
        patientData,
        { transaction: transaction },
        { returning: true }
    ).then(result => {
        return result;
    }).catch(err => {
        throw new Error("patient addition in bulk failed" + err);
    });
}

async function db_update_patient(
    tenant_id,
    patient_data,
    given_pid,
    transaction
) {
    let { pid } = given_pid
    logger.debug("The patient given pid is", given_pid)
    patient_list = ""
    let pdata = new Patient(patient_data)
    logger.debug("patient data is " + JSON.stringify(patient_data))
    await Patients_Data.update(
        {
            fname: patient_data["fname"],
            lname: patient_data["lname"],
            title: patient_data["title"],
            phone_contact: patient_data["phone_contact"],
            phone_cell: patient_data["phone_cell"],
            email: patient_data["email"],
            DOB: patient_data["DOB"],
            sex: patient_data["sex"],
            drivers_license: patient_data["drivers_license"],
            ss: patient_data["ss"],
            street: patient_data["street"],
            city: patient_data["city"],
            state: patient_data["state"],
            country_code: patient_data["country_code"],
            postal_code: patient_data["postal_code"],
            status: patient_data["status"],
            location_uuid: patient_data["location_uuid"],
            bed_uuid: patient_data["bed_uuid"],
            guardiansname: patient_data["guardiansname"],
            guardianrelationship: patient_data["guardianrelationship"],
            guardiansex: patient_data["guardiansex"],
            guardianaddress: patient_data["guardianaddress"],
            guardianity: patient_data["guradiancity"],
            guardianpostalcode: patient_data["guardianpostalcode"],
            guradiancountry: patient_data["guardiancountry"],
            guardianphone: patient_data["guardianphone"],
            mothersname: patient_data["mothersname"],
            deceased_date: patient_data["deceased_date"],
            admission_date: patient_data["admission_date"],
            idtype: patient_data["idtype"],
            idnumber: patient_data["idnumber"],
            discharge_date: patient_data["discharge_date"],
            tenant_id: tenant_id,
        },
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction }
    )
        .then((patient_data) => {
            logger.debug("Patient insert output is" + patient_data)
            patient_list = patient_data
        })
        .catch((err) => {
            logger.debug(
                "Patient insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Patient insert  error -  tenant check")
        })

    return patient_list
}

async function db_delete_patient(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The patient given pid is", given_pid)
    Patients_Data.destroy(
        {
            where: {
                pid: given_pid,
            },
        },
        db_delete_vital(given_pid, transaction),
        db_delete_ews(given_pid, transaction),
        db_delete_notes(given_pid, transaction),
        db_delete_prescription(given_pid, transaction),
        db_delete_vital_threshold(given_pid, transaction),
        db_delete_patch_patient_map(given_pid, transaction),

        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The patient is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete patient with pid" + given_pid,
                    "may be the patient was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The patient delete error is" + err)
            throw new Error("Could not delete patient with pid", given_pid)
        })
}

async function db_med_record_exist(med_record) {
    let patient_data
    try {
        patient_data = await Patients_Data.count({
            where: {
                med_record: med_record,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("Patient  " + med_record + "not found Err:" + err)
    }
    return patient_data
}

async function db_disable_patient(params) {
    let data
    let promises = []
    params.list.forEach(obj => {
        promises.push(
            Patients_Data.update(
                { disabled: 0 },
                {
                    where:{ 
                        tenant_id: params.tenantId,
                        pid: obj.pid
                    }
                }
            )
        )
    });

    await Promise.all(promises)
    .then((result) => {
        data = result
    })
    .catch((error) => {
        console.log(error)
    })
    return data
}

async function db_check_patient_exist(params) {
    try {
        return await Patients_Data.findOne({
            where: {
                pid: params,
            },
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports = {
    db_get_patient_list,
    db_get_patient_list_new,
    db_create_patient,
    db_bulk_create_patient,
    db_update_patient,
    db_patient_exist,
    db_delete_patient,
    db_patient_count,
    db_med_record_exist,
    db_patient_info,
    db_get_patient_details,
    db_get_patient_inventory,
    db_disable_patient,
    db_check_patient_exist
}
