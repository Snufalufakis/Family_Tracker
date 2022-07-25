
const connection = require("../db/connection");


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