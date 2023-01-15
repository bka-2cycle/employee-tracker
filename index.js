//const express = require('express');
const logo = require('asciiart-logo');
const config = require('./package.json');
const { prompt } = require('inquirer')
require(console.table)


const queries = require('./Queries')

const departmentArray = [];
const roleArray = [];
const employeeArray = [];

//const PORT = process.env.PORT || 3001;
//const app = express();

//express middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

init()
//connect to database

function init() {
    console.log(logo(config).render());
    loadInitialQuestions()
}
function loadInitialQuestions() {
    prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments"
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add a department"
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "View all roles"
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add a role"
                    value: "ADD_ROLE"
                },
                {
                    name: "View all employees"
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add an employee"
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update an employee role"
                    value: "UPDATE_EMPLOYEE_ROLE"
                },   
            ]
        }
    ])

      .then(choice => {
            let answer = choice.action
//giant switch statement
            switch (answer) {
                case "VIEW_DEPARTMENTS":
                    viewDepartments()
                    break;
                case "ADD DEPARTMENT":
                    addDepartmentQuestion()
                    break;

                case "VIEW_ROLES":
                    viewRoles()
                    break;
                case "ADD ROLE":
                    addRoleQuestion()
                    break;

                case "VIEW_EMPLOYEES":
                    viewEmployees()
                    break;
                case "ADD EMPLOYEE":
                    addEmployeeQuestion()
                    break;

                case "UPDATE_EMPLOYEE_ROLE":
                    updateEmployeeRole()
                    break;

                default:
                    break;
            }
        });
}
// THREE FUNCTIONS FOR VIEW:
function viewDepartments() {
    queries
        .viewDepartments()
        .then(([rows, fields]) => {
            console.table(rows);
        })
        //a promise/callback after view request to get to questions
        .then(() => {
            loadInitialQuestions();
        });
}

function viewRoles() {
    queries
        .viewRoles()
        .then(([rows, fields]) => {
            console.table(rows);
        })
        //a promise/callback after view request to get to questions
        .then(() => {
            loadInitialQuestions();
        });
}

function viewEmployees() {
    queries
        .viewEmployees()
        .then(([rows, fields]) => {
            console.table(rows);
        })
        //a promise/callback after view request to get to questions
        .then(() => {
            loadInitialQuestions();
        });
}




//THREE FUNCTIONS FOR ADD: HELP!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function addDepartmentQuestion() {
    prompt([
        {
            type: 'input',
            name: 'newdept',
            message: 'Enter the name of the department:',
        }
    ]).then
    //method should push response to array,
    //add data(from array) to table , confirm or err addition
    //clear array
    addDepartment();
    //show department table with new/added data and display initial questions
    viewDepartments();
}

