const inquirer = require("inquirer");
require("dotenv").config();
const cTable = require("console.table");
const express = require("express");
mysql = require("mysql2");
const connection = require("./config/connection.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to see?",
        name: "choices",
        choices: [
          "View All Family Members",
          "Add Family Members",
          "Update Family Members",
          "Exit",
        ],
      },
    ])
    .then(function (answers) {
      if (answers.choices === "View All Family Members") {
        getFamilyMembers();
      } else if (answers.choices === "Add Family Members") {
        addFamilyMembers();
      } else if (answers.choices === "Update Family Members") {
        updateFamilyMembers();
      } else if (answers.choices === "Exit") {
        connection.end();
      }
    });
}
console.table(start());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//

//When view all family is selected, this function will run getFamilyMembers and display the results in a table and returns a call to start function in server.js
function getFamilyMembers() {
  connection.query("SELECT * FROM family_members", function (err, results) {
    if (err) throw err;
    console.table(results);
    start();
  });
}
//When add family is selected, this function will run addFamilyMembers and prompt the user to add a family member
function addFamilyMembers() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the family member?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the last name of the family member?",
        name: "lastName",
      },
      // {
      //   type: `input`,
      //   message: `What is the family members allowance?`,
      //   name: "allowance",
      // },
      {
        type: "list",
        message: "What is the role of the family member?",
        name: "role",
        choices: [
          "Homemaker",
          "House Wife",
          "House Husband",
          "The Black Sheep",
          "Bread Winner",
          "Role Model",
          "Leader",
          "Provider",
          "Wall Doodler",
          "Daiper Changer",
          "Nanny",
          "The Apple Of My Eyes",
          "Stay at Home Mom",
          "Stay at home Dad",
          "Work From Home",
          "Father Figure",
          "Wears the trousers",
          "Rules the roost",
        ],
      },
    ])
    .then(function (answers) {
      connection.query(
        "INSERT INTO family_members SET ?",
        {
          first_name: answers.firstName,
          last_name: answers.lastName,
          // allowance: answers.allowance,
          fm_role_id: answers.roleName,
        },
        function (err, results) {
          if (err) throw err;
          console.log("Successfully added " + answers.firstName);
          start();
        }
      );
    });
}
//When update family is selected, this function will run updateFamilyMembers and prompt the user to update a family member
function updateFamilyMembers() {
  connection.query("SELECT * FROM family_members", function (err, results) {
    if (err) throw err;
    let family_members = [];
    for (let i = 0; i < results.length; i++) {
      let fullName = {
        name: results[i].first_name + " " + results[i].last_name,
        value: {
          id: results[i].fm_id,
          firstName: results[i].first_name,
          lastName: results[i].last_name,
        },
      };
      family_members.push(fullName);
    }
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which family members would you like to update?",
          name: "member",
          choices: family_members,
        },
      ])
      .then((answers) => {
        connection.query(
          "SELECT * FROM family_role",
          function (err, rolesResults) {
            if (err) throw err;
            let roles = [];
            for (let i = 0; i < rolesResults.length; i++) {
              let fullRole = {
                name: rolesResults[i].title,
                value: {
                  id: rolesResults[i].role_id,
                  role: rolesResults[i].title,
                },
              };
              roles.push(fullRole);
            }
            inquirer
              .prompt([
                {
                  type: "list",
                  message: `Which role would you like to update ${answers.member.firstName} to?`,
                  name: "role",
                  choices: roles,
                },
              ])
              .then((results) => {
                connection.query(
                  "UPDATE family_members SET fm_role_id = ? WHERE fm_id = ?",
                  [results.role.id, answers.member.id],
                  function (err, results) {
                    if (err) throw err;
                    start();
                  }
                );
              });
          }
        );
      });
  });
}
const getFamilyRoles = () => {
  console.log("inside here");
  connection.query("SELECT * FROM family_role", function (err, results) {
    console.log("inside cb");
    if (err) throw err;
    console.log(results);
    return results;
  });
};

const getAllDepartments = () => {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    return results;
  });
};
// const getFamilyMembers = () => {
//   console.log(`inside getFamilyMembers`);
//   connection.query("SELECT * FROM family_members", function (err, results) {
//     console.log();
//     if (err) throw err;
//     return results;
//   });
// };
