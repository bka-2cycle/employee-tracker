-- SQL add a department query --
INSERT INTO department (name)
VALUES
    ("Distribution");

SELECT * FROM department;

-- SQL add a role query --
INSERT INTO role (title, salary, department_id)
VALUES
    ("Web Development", 83000, 3);

SELECT * FROM role;

-- SQL add a employee query --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Frank", "Salevino", 10, 9);

SELECT * FROM employee;

//from mike
"SELECT role.id, role.title, department.name AS department"
//join statement changing title to department

//view all employees
"SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, 
role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee 
LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id 
LEFT JOIN employee manager on manager.id = employee.manager_id;"