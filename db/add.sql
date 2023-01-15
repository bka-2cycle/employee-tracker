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

