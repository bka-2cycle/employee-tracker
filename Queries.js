const connection = require("./db/connection")

  class Queries {
    constructor(connection) {
      this.connection = connection
    }
//THREE METHODS FOR VIEW:
    viewDepartments() {
      return this.connection.promise().query("SELECT department.id, department.name FROM department")
    }

    viewRoles() {
      return this.connection.promise().query("SELECT role.id, role.title, role.salary, role.department_id FROM role")
    }

//department and salary (department.name and role.salary) needs to be returned when viewing employee_db
    viewEmployees() {
      return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee")
    }

//THREE METHODS FOR ADD: HELP!!!!!!!!!!!!!!!!
//how do I get the user input into the empty array
//then add the data in the array to the table
//do I need to clear the array after data is inserted into the table? Yes right??
    addDepartment() {
      const department = new Department(department.name);
      dapartmentArray.push(department);
      return this.connection.promise().query("INSERT INTO department.name VALUES (${departmentArray[0]})")
    }

}

module.exports = new Queries(connection)









// Do console.logs appear in CL????

//an example showing a confirm statement on mySQL INSERT - possible after 21
/* var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});   */