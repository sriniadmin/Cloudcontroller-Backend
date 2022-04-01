const logger = require("../config/logger")
const SYSTEM_AAA_CODE = require("../lib/constants/AppEnum").SYSTEM_AAA_CODE
const AccessControl = require("accesscontrol")

const {
    db_get_particular_role_list,
} = require("../dbcontrollers/role.controller")

//BAISIC_LIC=
const VISUALIZER = [
    {
        role: "Tenant_License",
        resource: "visualizer", //X-forward-live247-visualizer
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/location/locationinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/sensordata",
        action: "read:any",
        attributes: "*",
    },
    //to upload images
    {
        role: "",
        resource: "/api/internal/upload",
        action: "read:any",
        attributes: "*",
    },
    //otp
    {
        role: "",
        resource: "/api/patients/{pid}/otp",
        action: "read:any",
        attributes: "*",
    },
    //notes
    {
        role: "",
        resource: "/api/patients/{pid}/notes",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/location",
        action: "read:any",
        attributes: "*",
    },
    //vitals
    {
        role: "",
        resource: "/api/patients/{pid}/vital",
        action: "read:any",
        attributes: "*",
    },
    //practitioners
    {
        role: "",
        resource: "/api/patients/{pid}/practictioner",
        action: "read:any",
        attributes: "*",
    },
    //vitalThreshold
    {
        role: "",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "read:any",
        attributes: "*",
    },
    //report
    {
        role: "",
        resource: "/api/patients/{pid}/report",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/trend",
        action: "read:any",
        attributes: "*",
    },
    //appointment
    {
        role: "",
        resource: "/api/patients/{pid}/appointment",
        action: "read:any",
        attributes: "*",
    },
    //user_patient_map
    {
        role: "",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "read:any",
        attributes: "*",
    },
    //ews
    {
        role: "",
        resource: "/api/patients/{pid}/ews",
        action: "read:any",
        attributes: "*",
    },
    //alert
    {
        role: "",
        resource: "/api/alerts/",
        action: "read:any",
        attributes: "*",
    },
]

const createPatient = [
    {
        role: "",
        resource: "/api/patients/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}",
        action: "update:any",
        attributes: "*",
    },
    //to upload image
    {
        role: "",
        resource: "/api/internal/upload",
        action: "create:any",
        attributes: "*",
    },
    //notes
    {
        role: "",
        resource: "/api/patients/{pid}/notes",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/location",
        action: "create:any",
        attributes: "*",
    },
    //vitals
    {
        role: "",
        resource: "/api/patients/{pid}/vital",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/vital",
        action: "update:any",
        attributes: "*",
    },
    //practitioners
    {
        role: "",
        resource: "/api/patients/{pid}/practictioner",
        action: "create:any",
        attributes: "*",
    },
    //vitalThreshold
    {
        role: "",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "create:any",
        attributes: "*",
    },
    //appointment
    {
        role: "",
        resource: "/api/patients/{pid}/appointment",
        action: "create:any",
        attributes: "*",
    },
    //user_patient_map
    {
        role: "",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "create:any",
        attributes: "*",
    },
    //ews
    {
        role: "",
        resource: "/api/patients/{pid}/ews",
        action: "create:any",
        attributes: "*",
    },
    //medication
    {
        role: "",
        resource: "/api/patients/{pid}/medication",
        action: "create:any",
        attributes: "*",
    },
]

const deletePatient = [
    {
        role: "",
        resource: "/api/patients/{pid}",
        action: "delete:any",
        attributes: "*",
    },
]

const viewPatch = [
    {
        role: "",
        resource: "/api/patients/{pid}/patch_map",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patch/patchinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/sensordata",
        action: "read:any",
        attributes: "*",
    },
]

const createPatch = [
    {
        role: "",
        resource: "/api/patients/{pid}/patch_map",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/patch_map",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patch/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patch/",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patch/{patch_uuid}",
        action: "update:any",
        attributes: "*",
    },
]

const deletePatch = []

const viewUser = [
    {
        role: "",
        resource: "/api/users/userinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/users/_self",
        action: "read:any",
        attributes: "*",
    },
]

const createUser = [
    {
        role: "",
        resource: "/api/users/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/users/{user_uuid}",
        action: "update:any",
        attributes: "*",
    },
]

const deleteUser = []

const viewTenant = [
    {
        role: "",
        resource: "/api/tenant/tenantinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/role/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/facility/facilityinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/location/locationinventory",
        action: "read:any",
        attributes: "*",
    },
]

const createTenant = [
    {
        role: "",
        resource: "/api/tenant/{tenant_uuid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/tenant",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/location/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/facility/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/facility/{facility_uuid}",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/role/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/role/",
        action: "update:any",
        attributes: "*",
    },
]

const deleteTenant = []

const viewPrescription = [
    {
        role: "",
        resource: "/api/patients/{pid}/prescription",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/medication/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/medication/prescription/",
        action: "read:any",
        attributes: "*",
    },
]

const createPrescription = [
    {
        role: "",
        resource: "/api/patients/{pid}/prescription",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/patients/{pid}/prescription",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/medication/prescription/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "",
        resource: "/api/medication/prescription/",
        action: "update:any",
        attributes: "*",
    },
]

const deletePrescription = []

//categories_permission=["patients","patches"]

let grantArray = [
    {
        role: "Doctor",
        resource: "/api/patient/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}",
        action: "delete:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/patch_map",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/patch_map",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/sensordata",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/otp",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/notes",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/notes",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/location",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/location/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/location/locationinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/location",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/vital",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/vital",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/vital",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/practictioner",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/practictioner",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/report",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/trend",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/prescription",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/prescription",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/prescription",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/appointment",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/appointment",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/users/userinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patch/patchinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/users/_self",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/internal/upload",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/internal/upload",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/internal/texttospeech",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/medication",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/medication/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/alerts",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/product/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/product/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/ews",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/patients/{pid}/ews",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/upgrade/mobile",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Doctor",
        resource: "/api/upgrade/mobile",
        action: "create:any",
        attributes: "*",
    },

    //Nurse
    {
        role: "Nurse",
        resource: "/api/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/alerts",
        action: "read:any",
        attributes: "*",
    },

    {
        role: "Nurse",
        resource: "/api/medication/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}",
        action: "delete:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/patch_map",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/patch_map",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/sensordata",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/otp",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/notes",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/notes",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/location",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/location",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/vital",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/vital",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/vital",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/practictioner",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/practictioner",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/vitalthreshold",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/report",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/trend",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/prescription",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/prescription",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/prescription",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/appointment",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/appointment",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patients/{pid}/user_patient_map",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/users/_self",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/patch/patchinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/users/userinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/upgrade/mobile",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Nurse",
        resource: "/api/upgrade/mobile",
        action: "create:any",
        attributes: "*",
    },

    //SuperAdmin
    {
        role: "SuperAdmin",
        resource: "/api/upgrade/mobile",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/upgrade/mobile",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/patient/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/patient",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/patch/patchinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/users/userinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/users/_self",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/users/",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/users/{user_uuid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/tenant/tenantinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/tenant",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/connectors",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "SuperAdmin",
        resource: "/api/connectors",
        action: "update:any",
        attributes: "*",
    },
    //Admin
    {
        role: "Admin",
        resource: "/api/patientinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/patients/{pid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/patch/patchinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/patch/",
        action: "create:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/patch/",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/patch/{patch_uuid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/users/userinventory",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/users/",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/users/_self",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/users/{user_uuid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/tenant/tenantinventory", //X-visulaix
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/tenant/{tenant_uuid}",
        action: "update:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/connectors/",
        action: "read:any",
        attributes: "*",
    },
    {
        role: "Admin",
        resource: "/api/connectors/",
        action: "create:any",
        attributes: "*",
    },
]
//license:
//license_permiussions:[{sensors:"spo2,bp",analytics:"visualizer"}]
//
// licensearry=[{
//     tenant_id:"tenant83147189034",
//     license_uuuid:"licenseoidjwfwioj",
//     license:{
//         "sensors":"spo2,bp,DS",
//         "analytics:":"visualizer",
//         "menu":"billing"
//     }
// }]

function functionConvertor(path) {
    let normalPath
    normalPath = path
    path = path.split("/")
    logger.debug("THE PATH IS", path, typeof path)
    let finalUUID
    let joinPath
    let api
    let uuid
    let finalPath
    let arr = []
    arr.push(path)
    logger.debug("array is", arr, arr[0], arr[0][0], arr[0][1])
    arr = arr[0]
    api = arr[2]
    logger.debug("the api name is", api)
    uuid = arr[3]
    logger.debug("the uuid is", uuid, typeof uuid)
    if (arr.length <= 3) {
        return normalPath
    }
    if (arr[3].length < 20 || arr[3] == "undefined") {
        return normalPath
    }
    if (api == "patients") {
        finalUUID = uuid.replace(arr[3], "{pid}")
        //logger.debug("the final uuid is", finalUUID);
    } else if (api == "users") {
        finalUUID = uuid.replace(arr[3], "{user_uuid}")
        logger.debug("the final uuid is", finalUUID)
    } else if (api == "patch") {
        finalUUID = uuid.replace(arr[3], "{patch_uuid}")
        logger.debug("the final uuid is", finalUUID)
    } else if (api == "tenant") {
        finalUUID = uuid.replace(arr[3], "{tenant_uuid}")
        logger.debug("the final uuid is", finalUUID)
    } else {
        logger.debug("The path is", normalPath)
        return normalPath
    }

    joinPath = path.join("/")
    logger.debug("the join path is", joinPath)

    finalPath = joinPath.replace(path[3], finalUUID)
    logger.debug("the final path is", finalPath)

    return finalPath
}

///TODO: this is what i have to write now on 
////new role is created the status is true, if the role is changes status is false

//if status is true : then fetch from redis 
//if status is false fetch from the db , and set back the statuys to true
//next time it will fetch from the redis  
// once the login is done , we call role and license api : and we store it in thr redis :
//in role and license we can have staus as true/false to check whether the license/roles permissions are changed

//-----> 

var license_Validate = async function (req, res, next) {
    logger.debug("The role of the user is ", req.userRole, req.path, req.method)
      //if license changes is true :  //license : status will be true
    //    TODO: from the etails for each tenant get the license dcategory 
  //grant array needs to be auto generated //get request of license  //put it in redis ; until license is changed : license_changes: true(default) 
    const ac = new AccessControl(grantArray)
//TODO : mark license changes to false in redis
//else read grant array from redis for the tenant
    //For extending the permissions
    //ac.grant("Tenant_License").extend(["visualizer"])
    //ac.grant("SuperAdmin").extend(["Admin", "Doctor", "Nurse"])
    let realResource = functionConvertor(req.path) // TODO : get it from req.headers --- > X-Forward-visualizer --> X-live247-visualizer
    logger.debug("THE REQ PATH IS", realResource, req.path)
    let resource = realResource // Identify the right resource
    let role = req.userRole
    logger.debug("the role is ", role)
    let permission = ""
    let tenant_id = req.userTenantId
    logger.debug("the tenant id in rbac is", tenant_id)

    let roleData = []
    try {
        logger.debug("inside try rbac block")
        roleData = await db_get_particular_role_list(tenant_id, role)
    } catch (err) {
        logger.debug("role Data fetched in RBAC failed", err)
    }
    logger.debug("role Data fetched in RBAC", roleData)
    let reqRolePermissions = []

    roleData.map((item) => {
        if (item.role_name.toLowerCase() === role.toLowerCase()) {
            reqRolePermissions = item.role_permission
        }
    })
    logger.debug("reqRolePermission array", role, reqRolePermissions)
    reqRolePermissions.map((item) => {
        item.role = role
    })
    logger.debug(
        "reqRolePermission array after update",
        role,
        reqRolePermissions
    )
    const ac = new AccessControl(reqRolePermissions)

    try {
        logger.debug("the user role is", role)
        logger.debug("User role check", ac.hasRole(role))
        if (!ac.hasRole(role)) {
            logger.info("User does not have a role in the system.")
            req.apiRes = SYSTEM_AAA_CODE["9"]
            req.apiRes["error"] = {
                errMessage: "User Role is undefined",
            }
            return next()
        }
        logger.debug("REQUEST METHOD", req.method, role, resource)
        switch (req.method) {
            case "GET":
                permission = ac.can(role).readAny(resource)
                logger.debug("PERMISSION METHOD", permission)
                break
            case "POST":
                permission = ac.can(role).updateAny(resource)
                break
            case "DELETE":
                permission = ac.can(role).deleteAny(resource)
                break
            case "PUT":
                permission = ac.can(role).updateAny(resource)
                break
            default:
        }
    } catch {
        logger.debug("Permission CATCH Continued ...")
        return next()
    }

    if (permission && permission.granted) {
        logger.debug("Permission Granted Continued ...")
        return next()
    } else {
        logger.debug("Permission NOT Granted Continued ...")
        return next()
        // return res.status(403).json({
        //     Unauthorized: SYSTEM_AAA_CODE["13"]
        // })
    }
}

module.exports = {
    RBAC_Validate,
    viewPatient,
    createPatient,
    deletePatient,
    viewPatch,
    createPatch,
    deletePatch,
    viewTenant,
    createTenant,
    deleteTenant,
    viewUser,
    createUser,
    deleteUser,
    viewPrescription,
    createPrescription,
    deletePrescription,
}
  