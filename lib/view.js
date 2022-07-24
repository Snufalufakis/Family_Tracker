const req = require('inquirer');
const mysql = require('mysql2');
const server = require('../server');
const view = require('./view');
const connection = require("./db/connection");
const chalk = require("chalk");

exports.getFamilyMembers = (cb) => {
 connection.query("SELECT * FROM family_role", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getAllDepartments = (cb) => {
    connection.query("SELECT * FROM department", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.getFamilyMembers = (cb) => {
   connection.query("SELECT * FROM family", function(err,results) {
     if(err) throw err;
     cb(results);
  });
}