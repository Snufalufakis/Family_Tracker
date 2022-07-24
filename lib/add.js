const inq = require("inquirer");
// Terminal string styling
const chalk = require("chalk");

const connection = require("./db/connection");
const server = require("..//server");

// Add Data Functions

exports.addFamilyMembers = () => {
  view.getFamilyMembers(function (rolesResults) {
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
    inq.prompt(options).then((answers) => {
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
            chalk.yellow(
              `${data.firstName} ${data.lastName} and ${data.lastName} has been updated`
            )
          );
          server.start();
        }
      );
    });
  });
};
