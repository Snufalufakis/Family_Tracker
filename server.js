const inq = import('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const path = require('path');
const connection = require('./db/connection')
const add = require('./lib/add');
const update = require('./lib/update');
const view = require('./lib/view');

const PORT = process.env.PORT || 3001


connection.connect = () => {
if (err) throw err;
console.log('Seems like you ready');
exports.start();
}
exports.start =() => {
    inq.prompt([
        {
            type: 'list',
            message: 'What would you like to see?',
            name: 'choices',
            choices: [
                'View All Family Members',
                'Add Family Members',
                'Update Family Members',
                'Exit'
            ]
        }
    ])
    .then(function(answers){
        if (answers.choice === 'View All Family Members') {
            view.viewAllFamilyMembers();
        }
        else if(answers.choice === 'Add Family Members') {
            add.addFamilyMembers();
        }
        else if(answers.choice === 'Update Family Members') {
            update.updateFamilyMembers();
        }
        else if(answers.choice === 'Exit') {
            connection.close();
            return
        }
    })
};
