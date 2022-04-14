const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")

const UUID_CONST = require("../lib/constants/AppEnum").UUID_CONST
const getUUID = require("../lib/system/uuidSystem").getUUID
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels

var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const uuidAPIKey = require("uuid-apikey")
const LOCATIONS = models.location
const patientLocation = models.patient_location_table

async function db_get_location_list(tenant_id, username, params) {
    let location_list = []
    
    // try {
    //     location_list = await LOCATIONS.findAll()
    // } catch (err) {
    //     console.log(err)
    //     throw new Error("Login Failure as part of user cred -  tenant check")
    // }
    // return location_list
    let whereStatement = { tenant_uuid: tenant_id }

    let { limit, offset, filter, location_uuid } = params
    if (location_uuid) whereStatement.location_uuid = location_uuid
    if (location_uuid) {
        await LOCATIONS.findAll({
            limit: parseInt(limit),
            // offset:parseInt(offset),
            order: ["id"],
            raw: true,
            where: whereStatement,
        })
            .then((location_data) => {
                logger.debug("LOCATION list is" + location_data)
                location_list = location_data
            })
            .catch((err) => {
                logger.debug(
                    "LOCATION list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("LOCATION list fetch error -  tenant check")
            })

        return location_list
    } else {
        await LOCATIONS.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: Sequelize.literal("date DESC"),
            raw: true,
            where: whereStatement,
        })
            .then((location_data) => {
                logger.debug("Location list is" + location_data)
                location_list = location_data
            })
            .catch((err) => {
                logger.debug(
                    "Location list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("Location list fetch error -  tenant check")
            })

        return location_list
    }
}

async function db_create_location(tenant_id, location_data, transaction) {
    //This route created new patch in the db
    logger.debug("TENANT ID IS", tenant_id)
    location_list = ""
    if (!location_data) return
    logger.debug("LOCATION data is " + location_data)
    let building_count = location_data["building_count"]
    let building_index = 0
    let floor_count, floor_index, ward_index, ward_count, bed_count
    floor_count = floor_index = ward_index = ward_count = bed_count = 0
    let ward_tag, floor_tag, building_tag, floor_desc, building_desc, ward_desc
    ward_tag =
        floor_tag =
        building_tag =
        floor_desc =
        building_desc =
        ward_desc =
            ""
    let location_array = []
    logger.debug("All the Location variables are initialized")
    if (building_index >= building_count) {
        logger.debug(
            "Building Index , Building Count Error : ",
            building_index,
            building_count
        )
        return false, location_list
    }
    let active = location_data["active"]
    let archive = location_data["archive"]
    let tenant_uuid = location_data["tenant_uuid"]
    logger.debug("TENANT UUID IS", tenant_uuid)
    let facility_uuid = location_data["facility_uuid"]
    // let facility_uuid = uuidAPIKey.create()["uuid"]
    // Make the dict of the following type
    // {
    //  building_no, floor_no, ward_no, bed_num, ward_description, floor_description, building_description, ward_tag, floor_tag, building_tag, facility_uuid,
    // 1,1,1,5,"icu ward", "ICU floor" , "building 1", "icu", "emergency", "name-x", "facility-uuid"
    // 1,1,2,10,"icu ward", "ICU floor" , "building 1", "icu", "emergency", "name-x", "facility-uuid"
    // 1,2,1,10,"special ward 1", "special class " , "building 1", "special ward 1", "emergency", "name-x", "facility-uuid"
    // }
    building_plan = location_data["buildings"]
    logger.debug("Building Plan is ", building_plan)
    while (building_index < building_count) {
        let location_map = {}
        building_key = "building_" + (building_index + 1)
        logger.debug("Building key is ", building_key)
        building_desc = building_plan[building_key]["description"] || ""
        building_tag = building_plan[building_key]["tag"] || ""
        location_map["building"] = building_index + 1
        location_map["building_description"] = building_desc
        location_map["building_tag"] = building_tag
        floor_index = 0
        floor_count = building_plan[building_key]["floor_count"]
        floor_plan = building_plan[building_key]["floors"]
        logger.debug(
            "The floors in building %s is %s",
            building_key,
            floor_count,
            building_plan[building_key]
        )
        while (floor_index < parseInt(floor_count)) {
            ward_index = 0
            floor_key = "floor_" + (floor_index + 1)
            logger.debug(
                "Floor key is ",
                floor_key,
                floor_plan[floor_key],
                floor_plan
            )
            floor_desc = floor_plan[floor_key]["description"] || ""
            floor_tag = floor_plan[floor_key]["tag"] || ""
            ward_count = floor_plan[floor_key]["ward_count"]
            ward_plan = floor_plan[floor_key]["wards"]
            location_map["floor"] = floor_index + 1
            location_map["floor_description"] = floor_desc
            location_map["floor_tag"] = floor_tag
            while (ward_index < parseInt(ward_count)) {
                ward_key = "ward_" + (ward_index + 1)
                logger.debug("Ward key is ", ward_key)
                ward_desc = ward_plan[ward_key]["description"] || ""
                bed_count = ward_plan[ward_key]["bed_count"]
                ward_tag = ward_plan[ward_key]["tag"] || ""

                location_map["ward"] = ward_index + 1
                location_map["bed_count"] = bed_count
                location_map["ward_description"] = ward_desc
                location_map["ward_tag"] = ward_tag
                location_map["archive"] = archive
                location_map["active"] = active
                location_map["tenant_uuid"] = tenant_id
                location_map["facility_uuid"] = facility_uuid

                // location_array['facility_uuid'] = facility_uuid
                location_array.push(JSON.parse(JSON.stringify(location_map)))
                logger.debug("Location Map is ", location_map)
                let array = []
                array.push(location_map["bed_count"])
                logger.debug("THE ARRAY IS", array)
                logger.debug("BED COUNT IS ", location_map["bed_count"])
                ward_index += 1
            }
            floor_index += 1
        }
        building_index += 1
    }
    let beds = []
    logger.debug("The Location to be updated - ", location_array)
    let uuidDict = { uuidType: UUID_CONST["location"], tenantID: tenant_id }
    let bedDict = { uuidType: UUID_CONST["bed"], tenantID: tenant_id }
    let promises = []
    for (let i = 0; i < location_array.length; i++) {
        logger.debug("the bed count is", location_array[i]["bed_count"])
        let bedCount = location_array[i]["bed_count"]
        logger.debug("the var bed count is", bedCount)
        for (j = 0; j < location_array[i]["bed_count"]; j++) {
            newBeds = beds.push(j)
            logger.debug("the new beds is", newBeds)
            logger.debug("the j new beds is", newBeds[j])
            logger.debug("the actual beds is", beds)
            location_array[i]["initial_bed_list"] = beds
        }
        beds = []

        promises.push(
            getUUID(uuidDict, transaction).then(async (uuid_result) => {
                logger.debug("The uuid result is", uuid_result)
                location_array[i]["location_uuid"] = uuid_result

                await LOCATIONS.create(
                    {
                        archive: location_array[i]["archive"],
                        active: location_array[i]["active"],
                        location_uuid: location_array[i]["location_uuid"],
                        tenant_uuid: location_array[i]["tenant_uuid"],
                        facility_uuid: location_array[i]["facility_uuid"],
                        floor: location_array[i]["floor"],
                        ward: location_array[i]["ward"],
                        building: location_array[i]["building"],
                        bed_count: location_array[i]["bed_count"],
                        ward_tag: location_array[i]["ward_tag"],
                        floor_tag: location_array[i]["floor_tag"],
                        building_tag: location_array[i]["building_tag"],
                        ward_description: location_array[i]["ward_description"],
                        floor_description:
                            location_array[i]["floor_description"],
                        building_description:
                            location_array[i]["building_description"],
                        initial_bed_list: location_array[i]["initial_bed_list"],
                        date: Sequelize.fn("NOW"),
                    },
                    transaction
                )
            })
        )
    }
    logger.debug("Promise is ", promises)
    await Promise.all(promises)
        .then((location_inserted_data) => {
            logger.debug("LOCATION insert output is" + location_inserted_data)
            location_list = location_inserted_data
        })
        .catch((err) => {
            logger.debug(
                "LOCATION insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("LOCATION insert  error -  tenant check" + err)
        })
    logger.debug("outside LOCATION insert output is")
    // return location_list
    return "updated location"
}

async function db_update_location(
    tenant_id,
    location_data,
    given_location_uuid,
    transaction
) {
    let { location_uuid } = given_location_uuid
    if (!location_data) return
    location_list = ""
    logger.debug("LOCATION data is " + location_data)

    await LOCATIONS.update(
        {
            archive: location_data["archive"],
            active: location_data["active"],
            location_uuid: location_data["location_uuid"],
            tenant_uuid: location_data["tenant_uuid"],
            facility_uuid: location_data["facility_uuid"],
            floor: location_data["floor"],
            ward: location_data["ward"],
            building: location_data["building"],
            date: location_data["date"],
        },
        {
            where: {
                location_uuid: given_location_uuid,
            },
        },
        { transaction: transaction["transaction"] }
    )
        .then((location_data) => {
            logger.debug("LOCATION insert output is" + location_data)
            location_list = location_data
        })
        .catch((err) => {
            logger.debug(
                "LOCATION insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("LOCATION insert  error -  tenant check")
        })

    return location_list
}

async function db_create_patient_location(
    tenant_id,
    patient_location_data,
    transaction
) {
    patient_location_data = JSON.stringify(patient_location_data)
    patient_location_data = JSON.parse(patient_location_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let patient_location = await patientLocation.create(patient_location_data, {
        transaction: trans,
    })
    try {
        logger.debug(
            "Patient Location Data insert output is" + patient_location
        )
    } catch (err) {
        logger.debug(
            "Patient Location insert  error " +
                tenant_id +
                " not found Err:" +
                err
        )
        throw new Error("Patient Location insert  error -  tenant check" + err)
    }
    return patient_location
}

async function db_get_patient_location_list(tenant_id, username, params) {
    let patient_location_list
    let { limit, offset, filter, pid } = params
    let whereStatement = { pid: pid }
    logger.debug("THE PID IS", pid)

    try {
        patient_location_list = await patientLocation.findAll({
            pid: pid
        })
    } catch (err) {
        console.log(err)
        throw new Error("Failure in fetching the notes" + err)
    }
    return patient_location_list
}

async function db_location_exist(location_uuid) {
    let location_data
    try {
        location_data = await LOCATIONS.count({
            where: {
                location_uuid: location_uuid,
            },
            rew: true,
        })
    } catch (err) {
        throw new Error("LOCATION  " + location_uuid + "not found Err:" + err)
    }
    return location_data
}

async function db_location_count(tenant_uuid) {
    let total_location_count
    try {
        total_location_count = await LOCATIONS.count()
    } catch (error) {
        logger.debug(
            "Location list count failed error " +
                tenant_id +
                "not found Err:" +
                err
        )
        throw new Error("DBQuery: Location List Count Failed")
    }
    logger.debug("Total Location Count is %s", total_location_count)
    return total_location_count
}

async function db_create_remote_location(tenant_id, location_data, transaction) {
    let t=null
    logger.debug('the tenant id in location controller',tenant_id)
    for (location of location_data) {
        uuidDict = {
            uuidType: UUID_CONST["location"],
            tenantID: tenant_id,
        }
        try {
            logger.debug(" UUID_result dict about to be formed")
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug(" UUID_result dict is formed", uuidDict)
            logger.debug("The uuid result for location", uuid_result)
            location["location_uuid"] = uuid_result
        } catch(err) {
            logger.debug("couldn't allocate UUID to location " + err)

        }
    }
    logger.debug("the location data in location controller is", location_data)
    let remote_location
    try {
        remote_location = await LOCATIONS.bulkCreate(location_data, { transaction: t })
        logger.debug('the location is',remote_location)
        logger.debug("Location insert output is" + remote_location)
    } catch (err) {
        logger.debug(
            "Location insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Location insert  error -  tenant check" + err)
    }
    return remote_location
}

async function db_update_remote_location(tenant_id, location_data, params,transaction) {
    let t=null
    let { ward_tag,floor_tag,status,location_uuid } = params
    let remote_location
    try {
        remote_location = await LOCATIONS.update(location_data, {
            where:{
              [Op.and]:[
                  {
                      tenant_uuid:tenant_id
                  },
                  {
                      status:"Remote"
                  },
                  {
                      ward_tag:ward_tag
                  },
                  {
                      floor_tag:floor_tag
                  },
                  {
                    location_uuid:location_uuid
                }
              ]
            }
        },{ transaction: t })
        logger.debug('the location is',remote_location)
        logger.debug("Location insert output is" + remote_location)
    } catch (err) {
        logger.debug(
            "Location insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Location insert  error -  tenant check" + err)
    }
    return remote_location
}

async function db_get_remote_location(tenant_uuid, params) {
    let { limit, offset, status,filter} = params
    logger.debug('params are',params)
    let whereStatement = {status:status }
    let location
    try {
        location = await LOCATIONS.findAll({
            where:{
                [Op.and]:[
                    {
                        tenant_uuid:tenant_uuid
                    },
                    {
                        status:status
                    },
                    {
                        archive:"1"
                    }
                ]
            }
        })
    } catch (err) {
        throw new Error("Error in fetching the remote location report" + err)
    }
    return location
}

module.exports = {
    db_get_location_list,
    db_create_location,
    db_update_location,
    db_create_patient_location,
    db_get_patient_location_list,
    db_location_exist,
    db_location_count,
   db_create_remote_location,
    db_get_remote_location,
    db_update_remote_location
}
