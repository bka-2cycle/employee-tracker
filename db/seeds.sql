USE company_db;

INSERT INTO department (name)
VALUES ("Accounting"),
       ("Editorial"),
       ("Production"),
       ("Sales");

       INSERT INTO role (title, salary, department_id)
VALUES ("Controller", 160000, 1),
       ("Bookkeeper", 80000, 1),
       ("Accounts Manager", 70000, 1),
       ("Billing Clerk", 90000, 1),
       ("Executive Editor", 110000, 2),
       ("Reporter", 80000, 2),
       ("Art Director", 90000, 3),
       ("Production Artist", 75000, 3),
       ("Sales Manager", 135000, 4),
       ("Sales Account Executive", 115000, 4);

       INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Troy", "Uniloff", 7, NULL),
       ("Bill", "Stark", 4, 1),
       ("Frank", "Tokowski", 1, NULL),
       ("Sarah", "Minech", 5, NULL),
       ("Leslie", "Thompson", 9, NULL),
       ("Jillian", "Lear", 3, 1),
       ("Jessica", "Clemmons", 2, 1),
       ("Greg", "Lanford", 6, 5),
       ("Amira", "Dinka", 6, 5),
       ("Lori", "Flanks", 6, 5),
       ("Tina", "Certise", 10, 9),
       ("Steve", "Kertin", 10, 9),
       ("Mandy", "Franklin", 10, 9),
       ("Jessie", "Mowen", 10, 9),
       ("Eric", "Santruse", 8, 7),
       ("Susan", "Wible", 8, 7);
       