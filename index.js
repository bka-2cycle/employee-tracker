const logo = require("asciiart-logo");
const config = require("./package.json");
const { prompt } = require("inquirer");
require("console.table");

const queries = require("./Queries");

var departmentArray = [];
var roleArray = [];
var employeeArray = [];
var updateEmpRoleArray = [];

init();
//connect to database

function init() {
  console.log(logo(config).render());
  loadInitialQuestions();
}
function loadInitialQuestions() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add an employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
      ],
    },
  ]).then((choice) => {
    let answer = choice.action;
    //giant switch statement
    switch (answer) {
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "ADD_DEPARTMENT":
        addDepartmentQuestion();
        break;

      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_ROLE":
        addRoleQuestion();
        break;

      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_EMPLOYEE":
        addEmployeeQuestion();
        break;

      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;

      default:
        break;
    }
  });
}
// THREE FUNCTIONS FOR "VIEW":
//VIEW ONE__________________________________________________________
function viewDepartments() {
  queries
    .viewDepartments()
    .then(([rows, fields]) => {
      console.table(rows);
    })

    .then(() => {
      loadInitialQuestions();
    });
}
//VIEW TWO__________________________________________________________
function viewRoles() {
  queries
    .viewRoles()
    .then(([rows, fields]) => {
      console.table(rows);
    })

    .then(() => {
      loadInitialQuestions();
    });
}
//VIEW THREE________________________________________________________
function viewEmployees() {
  queries
    .viewEmployees()
    .then(([rows, fields]) => {
      console.table(rows);
    })

    .then(() => {
      loadInitialQuestions();
    });
}

//THREE FUNCTIONS FOR "ADD":
//ADD ONE______________________________________________
function addDepartmentQuestion() {
  queries.viewRoles().then(([rows, fields]) => {
    prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ]).then((answers) => {
      queries.addDepartment(answers);
      console.log("successfully added a department");
      loadInitialQuestions();
    });
  });
}

//ADD TWO_____________________________________________
function addRoleQuestion() {
  queries.viewDepartments().then(([rows, fields]) => {
    let departments = rows;
    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is salary for the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
      //Need code from here out
    ]).then((answers) => {
      queries.addRole(answers);
      console.log("Successfully added a role");
      loadInitialQuestions();
    });
  });
}

//ADD THREE__________________________________________
function addEmployeeQuestion() {
  queries
    .viewRoles()
    .then(([rows, fields]) => {
      roleArray = rows.map(({ id, title }) => {
        return {
          name: `${title}`,
          value: id,
        };
      });
    })
    .then(() => {
      queries
        .viewEmployees()
        .then(([employees]) => {
          employeeArray = employees.map(({ id, first_name, last_name }) => {
            return {
              name: `${first_name} ${last_name}`,
              value: id,
            };
          });
        })
        .then(() => {
          prompt([
            {
              type: "input",
              name: "first_name",
              message: "What is the employee's first name?",
            },
            {
              type: "input",
              name: "last_name",
              message: "What is the employee's last name?",
            },
            {
              type: "list",
              name: "role_id",
              message: "What is the employee's role?",
              choices: roleArray,
            },
            {
              type: "list",
              name: "manager_id",
              message: "Who is the employee's manager?",
              choices: employeeArray,
            },
          ]).then((answers) => {
            queries.addEmployee(answers);
            console.log("successfully added employee");
            loadInitialQuestions();
          });
        });
    });
}

//ONE FUNCTION FOR UPDATE:
//UPDATE ONE___________________________________________________
function updateEmployeeRole() {
  queries.viewEmployees().then(([employees]) => {
    const employeeArray = employees.map(({ id, first_name, last_name }) => {
      return {
        name: `${first_name} ${last_name}`,
        value: id,
      };
    });
    prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's role would you like to update?",
        choices: employeeArray,
      },
    ]).then(({ employeeId }) => {
      queries.viewRoles().then(([roles]) => {
        const roleArray = roles.map(({ id, title }) => {
          return {
            name: title,
            value: id,
          };
        });
        prompt([
          {
            type: "list",
            name: "roleId",
            message: "Which role would you like to update the employee to?",
            choices: roleArray,
          },
        ]).then(({ roleId }) => {
          queries
            .updateEmployeeRole(employeeId, roleId)
            .then(() => console.log("Updated employee's role"))
            .then(() => loadInitialQuestions());
        });
      });
    });
  });
}
