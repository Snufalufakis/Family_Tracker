// const inquirer = require("inquirer");
// mysql = require("mysql2");
// const app = require("../server");
// const connection = require("../config/connection.js");

// //When view all family is selected, this function will run getFamilyMembers and display the results in a table and returns a call to start function in server.js
// function getFamilyMembers() {
//   connection.query("SELECT * FROM family_members", function (err, results) {
//     if (err) throw err;
//     console.table(results);
//   });
// }
// //When add family is selected, this function will run addFamilyMembers and prompt the user to add a family member
// function addFamilyMembers() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is the first name of the family member?",
//         name: "firstName",
//       },
//       {
//         type: "input",
//         message: "What is the last name of the family member?",
//         name: "lastName",
//       },
//       {
//         type: `input`,
//         message: `What is the family members allowance?`,
//         name: "allowance",
//       },
//       {
//         type: "list",
//         message: "What is the role of the family member?",
//         name: "role",
//         choices: [
//           "Homemaker",
//           "House Wife",
//           "House Husband",
//           "The Black Sheep",
//           "Bread Winner",
//           "Role Model",
//           "Leader",
//           "Provider",
//           "Wall Doodler",
//           "Daiper Changer",
//           "Nanny",
//           "The Apple Of My Eyes",
//           "Stay at Home Mom",
//           "Stay at home Dad",
//           "Work From Home",
//           "Father Figure",
//           "Wears the trousers",
//           "Rules the roost",
//         ],
//       },
//     ])
//     .then(function (answers) {
//       connection.query(
//         "INSERT INTO family_members SET ?",
//         {
//           first_name: answers.firstName,
//           last_name: answers.lastName,
//           allowance: answers.allowance,
//           dept_name: answers.roleName,
//         },
//         function (err, results) {
//           if (err) throw err;
//           console.log("Successfully added " + answers.firstName);
//           start();
//         }
//       );
//     });
// }
// //When update family is selected, this function will run updateFamilyMembers and prompt the user to update a family member
// function updateFamilyMembers() {
//   connection.query("SELECT * FROM family_members", function (err, results) {
//     if (err) throw err;
//     let family_members = [];
//     for (let i = 0; i < results.length; i++) {
//       let fullName = {
//         name: results[i].first_name + " " + results[i].last_name,
//         value: {
//           id: results[i].fm_id,
//           firstName: results[i].first_name,
//           lastName: results[i].last_name,
//         },
//       };
//       family_members.push(fullName);
//     }
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "Which family members would you like to update?",
//           name: "member",
//           choices: family_members,
//         },
//       ])
//       .then((answers) => {
//         connection.query(
//           "SELECT * FROM family_role",
//           function (err, rolesResults) {
//             if (err) throw err;
//             let roles = [];
//             for (let i = 0; i < rolesResults.length; i++) {
//               let fullRole = {
//                 name: rolesResults[i].title,
//                 value: {
//                   id: rolesResults[i].role_id,
//                   role: rolesResults[i].title,
//                 },
//               };
//               roles.push(fullRole);
//             }
//             inquirer
//               .prompt([
//                 {
//                   type: "list",
//                   message: `Which role would you like to update ${answers.member.firstName} to?`,
//                   name: "role",
//                   choices: roles,
//                 },
//               ])
//               .then((results) => {
//                 connection.query(
//                   "UPDATE family_members SET fm_role_id = ? WHERE fm_id = ?",
//                   [results.role.id, answers.member.id],
//                   function (err, results) {
//                     if (err) throw err;
//                     start();
//                   }
//                 );
//               });
//           }
//         );
//       });
//   });
// }
// const getFamilyRoles = () => {
//   console.log("inside here");
//   connection.query("SELECT * FROM family_role", function (err, results) {
//     console.log("inside cb");
//     if (err) throw err;
//     console.log(results);
//     return results;
//   });
// };

// const getAllDepartments = () => {
//   connection.query("SELECT * FROM department", function (err, results) {
//     if (err) throw err;
//     return results;
//   });
// };
// const getFamilyMembers = () => {
//   console.log(`inside getFamilyMembers`);
//   connection.query("SELECT * FROM family_members", function (err, results) {
//     console.log();
//     if (err) throw err;
//     return results;
//   });
// };
// // const getFamilyMembers = () => {
// //   connection.query("SELECT * FROM family_members", function (err, results) {
// //     if (err) throw err;
// //     return results;
// //   });
// // };

// // Add Data Functions
// function addFamilyMembers() {
//   const roles = getFamilyRoles();
//   console.log(roles);
//   const roleTitles = roles.map((role) => role.title);
//   let options = [
//     {
//       type: "input",
//       message: "Family Member First Name",
//       name: "firstName",
//       default: "Manny",
//     },
//     {
//       type: "input",
//       message: "Family Member Last Name",
//       name: "lastName",
//       default: "Fresh",
//     },
//     {
//       type: "list",
//       message: "Family Member Role",
//       name: "role",
//       choices: roleTitles,
//     },
//   ];

//   inquirer.prompt(options).then((answers) => {
//     let familyRoleId = [];
//     for (let i = 0; i < rolesResults.length; i++) {
//       if (rolesResults[i].title === answers.role) {
//         familyRoleId = rolesResults[i].fm_role_id;
//       }
//     }
//     connection.query(
//       "INSERT INTO family_members SET ?",
//       {
//         firstName: answers.firstName,
//         lastName: answers.lastName,
//         fm_role_id: familyRoleId,
//       },
//       function (err) {
//         if (err) throw err;
//         console.log(
//           `${data.firstName} ${data.lastName} and ${data.lastName} has been updated`
//         );
//         server.start();
//       }
//     );
//   });

//   getFamilyMembers(function (rolesResults) {
//     let family_role = [];
//     for (let i = 0; i < rolesResults.length; i++) {
//       family_role.push(rolesResults[i].title);
//     }
//     let options = [
//       {
//         type: "input",
//         message: "Family Member First Name",
//         name: "firstName",
//         default: "Manny",
//       },
//       {
//         type: "input",
//         message: "Family Member Last Name",
//         name: "lastName",
//         default: "Fresh",
//       },
//       {
//         type: "list",
//         message: "Family Member Role",
//         name: "role",
//         choices: roles,
//       },
//     ];
//     inquirer.prompt(options).then((answers) => {
//       let familyRoleId = [];
//       for (let i = 0; i < rolesResults.length; i++) {
//         if (rolesResults[i].title === answers.role) {
//           familyRoleId = rolesResults[i].fm_role_id;
//         }
//       }
//       connection.query(
//         "INSERT INTO family_members SET ?",
//         {
//           firstName: answers.firstName,
//           lastName: answers.lastName,
//           fm_role_id: familyRoleId,
//         },
//         function (err, results) {
//           if (err) throw err;
//           console.log(
//             `${data.firstName} ${data.lastName} and ${data.lastName} has been updated`
//           );
//           server.start();
//         }
//       );
//     });
//   });
// }

// function updateFamilyMembers() {
//   getFamilyMembers(function (familyResults) {
//     console.log(familyResults);
//     let family_members = [];
//     for (let i = 0; i < familyResults.length; i++) {
//       let fullName = {
//         name: familyResults[i].firstName + " " + familyResults[i].last_name,
//         value: {
//           id: familyResults[i].fm_id,
//           firstname: familyResults[i].firstName,
//           lastname: familyResults[i].last_name,
//         },
//       };

//       family_members.push(fullName);
//     }

//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "Which family members would you like to update?",
//           name: "member",
//           choices: family_members,
//         },
//       ])
//       .then((answers) => {
//         getFamilyRoles(function (rolesResults) {
//           let roles = [];
//           console.log(answers.member);

//           for (let i = 0; i < rolesResults.length; i++) {
//             let fullRole = {
//               name: rolesResults[i].title,
//               value: {
//                 id: rolesResults[i].role_id,
//                 role: rolesResults[i].title,
//               },
//             };
//             roles.push(fullRole);
//           }

//           inquirer
//             .prompt([
//               {
//                 type: "list",
//                 message: `Which role would you like to update ${answers.member.firstName} to?`,
//                 name: "role",
//                 choices: roles,
//               },
//             ])
//             .then((results) => {
//               console.log("results...");
//               console.log(results.role);
//               connection.query(
//                 "UPDATE family_members SET fm_role_id = ? WHERE fm_id = ?",
//                 [results.role.id, answers.member.id],
//                 function (err) {
//                   if (err) throw err;
//                   console.log("Successfully updated " + answers.member.id);
//                   app.start();
//                 }
//               );
//             });
//         });
//       });
//   });
// }

// module.exports = { addFamilyMembers, updateFamilyMembers, getFamilyMembers };
