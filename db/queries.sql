SELECT *
FROM department;

SELECT *
FROM role;

SELECT *
FROM employee;

INSERT INTO department (id, name)
  VALUES (5, "Distribution");

INSERT INTO role (title, salary, department_id)
  VALUES ("Delivery Driver", 65000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Lee", "Slavens", 65000, 11);

  //need update table data command


