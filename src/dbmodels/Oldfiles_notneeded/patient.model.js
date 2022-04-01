"use strict"
var dbConn = require("../config/db.config")

var Patient = function(patientobj) {
   
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
    this.pid = patientobj.postal_code
};

Patient.create = function (newPatient, result) {

    dbConn.query("INSERT INTO patient_data set ?", newPatient, function (err, res) {
        if(err) { 
            console.log("error: ", err);
            result(err, null);}
        else{ 
            console.log(res.insertId); 
            result(null, res.insertId);
        }
    });
}

module.exports = Patient;