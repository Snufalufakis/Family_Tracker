const inquirer = require("inquirer");
require("dotenv").config();
const cTable = require("console.table");
const express = require("express");
const mysql = require("mysql2");
const connection = require("./config/connection.js");
const {
  addFamilyMembers,
  updateFamilyMembers,
  getFamilyMembers,
} = require("./lib/prompts");
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
        connection.close();
        return;
      }
    });
}
start();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
