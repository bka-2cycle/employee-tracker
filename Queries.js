const connection = require("./db/connection");

class Queries {
  constructor(connection) {
    this.connection = connection;
  }
  //THREE METHODS FOR "VIEW":______________________________________
  viewDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department");
  }

  viewRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id=department.id;"
      );
  }

  viewEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }

  //THREE METHODS FOR "ADD": ______________________________________________

  //ADD DEPARTMENT QUESTION
  addDepartment(data) {
    return this.connection
      .promise()
      .query(`INSERT INTO department SET ?`, data);
  }

  //ADD A ROLE QUESTION
  addRole(data) {
    return this.connection.promise().query(`INSERT INTO role SET ?`, data);
  }

  //ADD EMPLOYEE QUESTION
  addEmployee(data) {
    return this.connection.promise().query(`INSERT INTO employee SET ?`, data);
  }

  //UPDATE EMPLOYEE ROLE QUESTION__________________________________________

  updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }
}

module.exports = new Queries(connection);
