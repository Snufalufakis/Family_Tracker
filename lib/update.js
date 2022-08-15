const view = require("./view");

// const view = require('./view');
// const chalk = import("chalk");

function updateFamilyRoles() {
  view.getFamilyMembers(function (familyResults) {
    console.log(chalk.red(familyResults));
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
        view.getFamilyRoles(function (rolesResults) {
          let roles = [];
          console.log(chalk.yellow(answers.member));

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
                  console.log(
                    chalk.blue("Successfully updated " + answers.member.id)
                  );
                  app.start();
                }
              );
            });
        });
      });
  });
}
module.exports = { updateFamilyRoles };
