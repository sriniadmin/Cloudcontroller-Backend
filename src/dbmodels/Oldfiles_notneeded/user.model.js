"use strict"
var dbConn = require("../config/db.config")

var User = function(user) {
    this.fname = user.fname;
    this.lname = user.lname;
    this.username = user.username;
    this.password = user.password;
    
    this.phone = user.phone;
};


//this.email = user.email
User.create = function (newUser, result) {

    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) { 
            console.log("error: ", err);
            result(err, null);}
        else{ 
            console.log(res.insertId); 
            result(null, res.insertId);
        }
    });
}

module.exports= User;