const update = require("./update.js");
const add = require("./add.js");
const connection = require("./config/connection");

getFamilyRoles = (cb) => {
  connection.query("SELECT * FROM family_role", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

getAllDepartments = (cb) => {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};
getFamilyMembers = (cb) => {
  connection.query("SELECT * FROM family", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};
