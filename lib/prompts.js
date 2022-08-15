const mysql = require("mysql2");
// const view = require("./view");
const connection = require("../config/connection.js");

const getFamilyRoles = (cb) => {
  connection.query("SELECT * FROM family_role", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

const getAllDepartments = (cb) => {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};
const getFamilyMembers = (cb) => {
  connection.query("SELECT * FROM family", function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

// Add Data Functions
function addFamilyMembers() {
  getFamilyMembers(function (rolesResults) {
    let family_role = [];
    for (let i = 0; i < rolesResults.length; i++) {
      family_role.push(rolesResults[i].title);
    }
    let options = [
      {
        type: "input",
        message: "Family Member First Name",
        name: "firstName",
        default: "Manny",
      },
      {
        type: "input",
        message: "Family Member Last Name",
        name: "lastName",
        default: "Fresh",
      },
      {
        type: "list",
        message: "Family Member Role",
        name: "role",
        choices: roles,
      },
    ];
    inquirer.prompt(options).then((answers) => {
      let familyRoleId = [];
      for (let i = 0; i < rolesResults.length; i++) {
        if (rolesResults[i].title === answers.role) {
          familyRoleId = rolesResults[i].fm_role_id;
        }
      }
      connection.query(
        "INSERT INTO family_members SET ?",
        {
          firstName: answers.firstName,
          lastName: answers.lastName,
          fm_role_id: familyRoleId,
        },
        function (err, results) {
          if (err) throw err;
          console.log(
            `${data.firstName} ${data.lastName} and ${data.lastName} has been updated`
          );
          server.start();
        }
      );
    });
  });
}

function updateFamilyMembers() {
  getFamilyMembers(function (familyResults) {
    console.log(familyResults);
    let family_members = [];
    for (let i = 0; i < familyResults.length; i++) {
      let fullName = {
        name: familyResults[i].firstName + " " + familyResults[i].last_name,
        value: {
          id: familyResults[i].fm_id,
          firstname: familyResults[i].firstName,
          lastname: familyResults[i].last_name,
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
        getFamilyRoles(function (rolesResults) {
          let roles = [];
          console.log(answers.member);

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
              console.log("results...");
              console.log(results.role);
              connection.query(
                "UPDATE family_members SET emp_role_id = ? WHERE fm_id = ?",
                [results.role.id, answers.member.id],
                function (err, results) {
                  if (err) throw err;
                  console.log("Successfully updated " + answers.member.id);
                  app.start();
                }
              );
            });
        });
      });
  });
}

module.exports = { addFamilyMembers, updateFamilyMembers, getFamilyMembers };
