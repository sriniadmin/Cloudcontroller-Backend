let SYSTEM_DB_CODE = {
  "1": {
    "Code": "DB_CONNECT_FAILURE",
    "HttpStatus": "",
    "Message": "",
    "Details": {}
  }

}


let SYSTEM_AAA_CODE = {
  "1": {
    "Code": "SESSION_SUCCESS",
    "HttpStatus": "200",
    "Message": "SESSION SUCCESS",
    "Details": {}
  },
  "2": {
    "Code": "SESSION_EXPIRY",
    "HttpStatus": "440",
    "Message": "SESSION EXPIRED",
    "Details": {}
  },
  "3": {
    "Code": "SESSION_WITHOUT_TOKEN",
    "HttpStatus": "440",
    "Message": "SESSION_WITHOUT_TOKEN",
    "Details": {}
  },
  "4": {
    "Code": "TENANT_ID_MISSING",
    "HttpStatus": "470",
    "Message": "TENANT_ID_MISSING",
    "Details": {}
  },
  "5": {
    "Code": "INVALID_USER",
    "HttpStatus": "470",
    "Message": "INVALID_USER",
    "Details": {}
  },
  "6": {
    "Code" : "LOGIN_SUCCESS",
    "HttpStatus": 200,
    "Message" : "LOGIN SUCCESS",
    "Details" : {}
  },
  "7": {
    "Code" : "LOGOUT_SUCCESS",
    "HttpStatus": 200,
    "Message" : "LOGOUT SUCCESS",
    "Details" : {}
  },
  "8": {
    "Code" : "USER_ACTIVITY_TIMEOUT",
    "HttpStatus": 440,
    "Message" : "USER_ACTIVITY_TIMEOUT",
    "Details" : {}
  },
  "9": {
    "Code": "INVALID_ROLE",
    "HttpStatus": "470",
    "Message": "INVALID_ROLE",
    "Details": {}
  },
  "10": {
    "Code": "INVALID_PASSWORD",
    "HttpStatus": "470",
    "Message": "INVALID_PASSWORD",
    "Details": {}
  },
  "11": {
    "Code": "INVALID_EMAIL",
    "HttpStatus": "470",
    "Message": "INVALID_EMAIL",
    "Details": {}
  },

}


let HTTP_CODE = {
  "1": {
    "Code" : "PREFETCH_PATIENT_FAILURE",
    "HttpStatus": "",
    "Message" : "",
    "Details" : {}
  },


}

let TENANT_CODE = {
  "1" : {
    "Code" : "FETCH_TENANT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the tenant information",
    "Details" : {}
  }
}

let PATIENT_CODE = {
  "1" : {
    "Code" : "FETCH_PATIENT_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the patient inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PATIENT_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the patient inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PATIENT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the patient information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PATIENT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new patient  information",
    "Details" : {}
  },
  "5": {
    "Code" : "PATIENT_NOT_EXIST",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the  patient  information",
    "Details" : {}
  }

}

let USER_CODE = {
  "1" : {
    "Code" : "FETCH_USER_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the user inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_USER_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the user inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_USER_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the user information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_USER_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new user  information",
    "Details" : {}
  },
  "5": {
    "Code" : "USER_NOT_EXIST",
    "HttpStatus": "470",
    "Message" : "No such UUID present",
    "Details" : {}
  },

}

let PATCH_CODE = {
  "1" : {
    "Code" : "FETCH_PATCH_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the patch inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PATCH_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the patch inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PATCH_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the patch information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PATCH_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new patch  information",
    "Details" : {}
  },
  "5" : {
    "Code" : "PATCH_DOES_NOT_EXIST",
    "HttpStatus": "470",
    "Message" : "Failure in finding the patch  information",
    "Details" : {}
  },
  "6" : {
    "Code" : "PATCH_SERIAL_NUMBER_DOES_NOT_EXIST",
    "HttpStatus": "470",
    "Message" : "Failure in finding the patch serial  information",
    "Details" : {}
  },
  "7" : {
    "Code" : "PATCH_SERIAL_NUMBER_DOEST_NOT_MATCH",
    "HttpStatus": "470",
    "Message" : "Serial number and patch type is not matching for one or more devices",
    "Details" : {}
  },
  "8" : {
    "Code" : "PATCH_GROUP_ID_UPDATE_SUCCESSFUL",
    "HttpStatus": "200",
    "Message" : "Success in updating the gpatch_group_id for the devices",
    "Details" : {}
  },
  "9" : {
    "Code" : "PATCH_GROUP_ID_UPDATE_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in updating the patch_group_id for the devices",
    "Details" : {}
  },
  "10" : {
    "Code" : "PATCH_GROUP_ID_UPDATE_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in updating ,as gateway is not present",
    "Details" : {}
  },

}

let VITAL_CODE = {
  "1" : {
    "Code" : "FETCH_VITAL_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the vital inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_VITAL_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the vital inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_VITAL_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the vital information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_VITAL_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new vital  information",
    "Details" : {}
  },
}

let DRUG_CODE = {
  "1" : {
    "Code" : "FETCH_DRUG_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the drug inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_DRUG_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the drug inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_DRUG_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the drug information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_DRUG_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new drug  information",
    "Details" : {}
  },
}

let FACILITY_CODE = {
  "1" : {
    "Code" : "FETCH_FACILITY_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the facility inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_FACILITY_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the facility inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_FACILITY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the facility information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_FACILITY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new facility  information",
    "Details" : {}
  },
}

let PRODUCT_CODE = {
  "1" : {
    "Code" : "FETCH_PRODUCT_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the product inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PRODUCT_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the product inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PRODUCT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the product information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PRODUCT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new product information",
    "Details" : {}
  },
}

let PRAC_CODE = {
  "1" : {
    "Code" : "FETCH_PRAC_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the prac inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PRAC_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the prac inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PRAC_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the prac information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PRAC_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new prac  information",
    "Details" : {}
  },
}

let PATCH_PATIENT_MAP_CODE = {
  "1" : {
    "Code" : "FETCH_PATCH_PATIENT_MAP_INVENTORY_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the PATCH PATIENT MAP inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PATCH_PATIENT_MAP_INVENTORY_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the PATCH PATIENT MAP inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PATCH_PATIENT_MAP_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the PATCH PATIENT MAP information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PATCH_PATIENT_MAP_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new PATCH PATIENT MAP  information",
    "Details" : {}
  },
}
let EWS_CODE = {
  "1" : {
    "Code" : "FETCH_EWS_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the ews inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_EWS_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the ews inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_EWS_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the ews information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_EWS_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new ews   information",
    "Details" : {}
  },
}
let TENANTS_CODE = {
  "1" : {
    "Code" : "FETCH_TENANTS_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the tenants inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_TENANTS_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the tenants inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_TENANTS_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the tenants information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_TENANTS_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new tenants information",
    "Details" : {}
  },
}
let NOTES_CODE = {
  "1" : {
    "Code" : "FETCH_NOTES_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the notes inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_NOTES_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the notes inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_NOTES_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the notes information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_NOTES_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new notes information",
    "Details" : {}
  },
}
let APPOINTMENT_CODE = {
  "1" : {
    "Code" : "FETCH_APPOINTMENT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the appointment inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_APPOINTMENT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the appointment inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_APPOINTMENT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the appointment information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_APPOINTMENT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new appointment information",
    "Details" : {}
  },
}
let PRESCRIPTION_CODE = {
  "1" : {
    "Code" : "FETCH_PRESCRIPTION_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the PRESCRIPTION inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_PRESCRIPTION_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the PRESCRIPTION inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_PRESCRIPTION_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the PRESCRIPTION information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_PRESCRIPTION_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new PRESCRIPTION information",
    "Details" : {}
  },
}

let ALERTS_CODE = {
  "1" : {
    "Code" : "ALERT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the Alerts information",
    "Details" : {}
  },
  "2" : {
    "Code" : "ALERT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the Alerts information",
    "Details" : {}
  }
}

let BED_CODE = {
  "1" : {
    "Code" : "FETCH_BED_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the BED inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_BED_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the BED inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_BED_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the BED information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_BED_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new BED information",
    "Details" : {}
  },
}

let LOCATION_CODE = {
  "1" : {
    "Code" : "FETCH_LOCATION_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the LOCATION inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_LOCATION_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the LOCATION inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_LOCATION_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the LOCATION information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_LOCATION_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new LOCATION information",
    "Details" : {}
  },
  "5": {
    "Code" : "LOCATION_DOES_NOT_EXIST",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the  location  information",
    "Details" : {}
  }
}

let CONNECTOR_CODE = {
  "1" : {
    "Code" : "FETCH_CONNECTOR_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the Connector inventory information",
    "Details" : {}
  },
  "2" : {
    "Code" : "FETCH_CONNECTOR_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the Connector inventory information",
    "Details" : {}
  },
  "3" : {
    "Code" : "CREATE_CONNECTOR_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in creating the Connector information",
    "Details" : {}
  },
  "4" : {
    "Code" : "CREATE_CONNECTOR_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in creating the new Connector information",
    "Details" : {}
  },
}

let JSON_SCHEMA_CODE = {
  "1" : {
    "Code" : "FETCH_SCHEMA_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the correct field information",
    "Details" : {}
  },
}

let INTERNAL_CODE = {
  "0" : {
    "Code" : "UUID_GEN_SUCCESS",
    "HttpStatus": "200",
    "Message" : "UUID Created - value is ",
    "Details" : {}
  },
  "1" : {
    "Code" : "UUID_GEN_FAILURE",
    "HttpStatus": "470",
    "Message" : "UUID Creation failed",
    "Details" : {}
  },
  "2" : {
    "Code" : "VALDATE MODELS SUCCESS",
    "HttpStatus": "200",
    "Message" : "Validate model fields are as follows ",
    "Details" : {}
  },
  "3" : {
    "Code" : "VALIDATE_MODELS_FAILURE",
    "HttpStatus": "200",
    "Message" : "Validate model failure ",
    "Details" : {}
  },
}


let IMAGE_CODE = {
  "0" : {
    "Code" : "IMAGE_UPLOAD_SUCCESS",
    "HttpStatus": "200",
    "Message" : "SUCESSFULLY UPLOADED THE IMAGE ",
    "Details" : {}
  },
  "1" : {
    "Code" : "IMAGE_UPLOAD_FAILURE",
    "HttpStatus": "470",
    "Message" : "FAILURE IN UPLOADING THE IMAGE",
    "Details" : {}
  },
  "2" : {
    "Code" : "IMAGE_SUCCESS",
    "HttpStatus": "200",
    "Message" : "SUCCESS IN FETCHING THE IMAGES ",
    "Details" : {}
  },
  "3" : {
    "Code" : "IMAGE_FAILURE",
    "HttpStatus": "200",
    "Message" : "FAILURE IN FETCHING THE IMAGES ",
    "Details" : {}
  },
}

let TRANSACTION_CODE = {
  "0" : {
    "Code" : "TRANSACTION_COMMIT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "TRANSACTION COMMIT SUCCESSFUL",
    "Details" : {}
  },
  "1" : {
    "Code" : "TRANSACTION_COMMIT_FAILURE",
    "HttpStatus": "470",
    "Message" : "FAILURE IN COMMIT",
    "Details" : {}
  },
  "2" : {
    "Code" : "TRANSACTION_DELETE_SUCCESS",
    "HttpStatus": "470",
    "Message" : "TRANSACTION DELETE SUCCESSFUL",
    "Details" : {}
  },
  "3" : {
    "Code" : "TRANSACTION_DELETE_FAILURE",
    "HttpStatus": "470",
    "Message" : "FAILURE IN DELETION",
    "Details" : {}
  },
}

let MEDSCHED_CODE = {
  "FAILURE" : {
    "Code" : "MEDSCHED_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the Medication Schedule information",
    "Details" : {}
  },
  "SUCCESS" : {
    "Code" : "MEDSCHED_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the Medication Schedule information",
    "Details" : {}
  }
}

let AUDIT_CODE = {
  "FAILURE" : {
    "Code" : "AUDIT_FAILURE",
    "HttpStatus": "470",
    "Message" : "Failure in fetching the Medication Schedule information",
    "Details" : {}
  },
  "SUCCESS" : {
    "Code" : "AUDIT_SUCCESS",
    "HttpStatus": "200",
    "Message" : "Success in fetching the Medication Schedule information",
    "Details" : {}
  }
}

let UUID_CONST = {
  "tenant" : "tenant",
  "patient" : "patient",
  "patch" : "patch",
  "location" : "location",
  "facility" : "facility",
  "bed" : "bed",
  "user":"user",
  "note":"note",
  "connector":"connector",
  "image":"image",
  "vital":"vital",
  "prescription":"prescription",
  "gateway": "gateway"
}


let SCHEMA_CODE={
  'usersSchema':{
    'count':1,
    'schema0':'users'
  },
  'usersSecureSchema':{
    'count':1,
    'schema0':'users_secure'
  },
  'ewsTableSchema':{
    'count':1,
    'schema0':'ews_table'
  },
  'drugsSchema':{
    'count':1,
    'schema0':'drugs'
  },
  'vitalsSchema':{
    'count':1,
    'schema0':'form_vitals'
  },
  'tenantsSchema':{
    'count':1,
    'schema0':'tenant'
  },
  'prescriptionsSchema':{
    'count':1,
    'schema0':'prescriptions'
  },
  'pracPatientMapSchema':{
    'count':1,
    'schema0':'practictioner_patient_map'
  },
  'vitalthresholdMapSchema':{
    'count':1,
    'schema0':'vital_threshold'
  },
  'patchSchema':{
    'count':1,
    'schema0':'patch'
  },
  'patchPatientMap':{
    'count':1,
    'schema0':'patch_patient_map'
  },
  'patientsSchema':{
    'count':1,
    'schema0':'patient_data'
  },
  'customPatientMap':{
    'count':1,
    'child_count':3,
    'schema0':'custom_patient_map',
    'child0':'patient_data.js',
    'child1':'patch_patient_map.js',
    'child2':'ews_table.js',
  },
  'customVitalMap':{
    'count':1,
    'child_count':2,
    'schema0':'custom_vital_map',
    'child0':'form_vitals.js',
    'child1':'patient_data.js',

  },
  'drugsSchema':{
    'count':1,
    'schema0':'drugs'
  },
  'notesSchema':{
    'count':1,
    'schema0':'notes'
  },
  'bedSchema':{
    'count':1,
    'schema0':'bed'
  },
  'AppointmentSchema':{
    'count':1,
    'schema0':'Appointment'
  },
  'UserPatientMapSchema':{
    'count':1,
    'schema0':'user_patient_map'
  },
  'locationSchema':{
    'count':1,
    'schema0':'location'
  },
  'connectorSchema':{
    'count':1,
    'schema0':'connector'
  },
  'facilitySchema':{
    'count':1,
    'schema0':'facility'
  }
}

let ERROR_CODE={
  "DB_FAILURE": {
    "Code" : "DB_FAILURE",
    "HttpStatus": "470",
    "Message" : "DB VALIDATION FAILED",
    "Details" : {}
  },
}

let SYSTEM_ERROR_CODE = {

}

let ATTRIBUTES={
  "PATIENTS":['fname','lname']
}

var PATIENTS=['fname','lname']

module.exports = {
  SYSTEM_DB_CODE,
  SYSTEM_ERROR_CODE,
  HTTP_CODE,
  SYSTEM_AAA_CODE,
  TENANT_CODE,
  PATIENT_CODE,
  USER_CODE,
  PATCH_CODE,
  VITAL_CODE,
  DRUG_CODE,
  FACILITY_CODE,
  PRAC_CODE,
  PATCH_PATIENT_MAP_CODE,
  EWS_CODE,
  TENANTS_CODE,
  NOTES_CODE,
  APPOINTMENT_CODE,
  PRESCRIPTION_CODE,
  BED_CODE,
  LOCATION_CODE,
  CONNECTOR_CODE,
  SCHEMA_CODE,
  JSON_SCHEMA_CODE,
  INTERNAL_CODE,
  UUID_CONST,
  TRANSACTION_CODE,
  ALERTS_CODE,
  PRODUCT_CODE,
  ERROR_CODE,
  IMAGE_CODE,
  MEDSCHED_CODE,
  AUDIT_CODE,
  ATTRIBUTES,
  PATIENTS,
};
