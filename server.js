require("dotenv").config();
const cTable = require("console.table");
const express = require("express");
const mysql = require("mysql2");
const view = require("./lib/view");
const add = require("./lib/add");
const update = require("./lib/update");
const connection = require("./config/connection");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import inquirer from "inquirer";
// import mysql from "mysql2";
// import cTable from "console.table";
// import path from "path";
// import connection from "./config/connection.js";
// import add from "./lib/add.js";
// import update from "./lib/update.js";
// import view from "./lib/view.js";

const PORT = process.env.PORT || 3001;

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
    if (answers.choice === "View All Family Members") {
      view.viewAllFamilyMembers();
    } else if (answers.choice === "Add Family Members") {
      add.addFamilyMembers();
    } else if (answers.choice === "Update Family Members") {
      update.updateFamilyMembers();
    } else if (answers.choice === "Exit") {
      connection.close();
      return;
    }
  });

// function start () {

//     inquirer.prompt([
//         {
//             type: 'list',
//             message: 'What would you like to see?',
//             name: 'choices',
//             choices: [
//                 'View All Family Members',
//                 'Add Family Members',
//                 'Update Family Members',
//                 'Exit'
//             ]
//         }
//     ])
//     .then(function(answers){
//         if (answers.choice === 'View All Family Members') {
//             view.viewAllFamilyMembers();
//         }
//         else if(answers.choice === 'Add Family Members') {
//             add.addFamilyMembers();
//         }
//         else if(answers.choice === 'Update Family Members') {
//             update.updateFamilyMembers();
//         }
//         else if(answers.choice === 'Exit') {
//             connection.close();
//             return
//         }
//     })
// };
// start();
