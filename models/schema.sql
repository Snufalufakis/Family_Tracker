DROP DATABASE IF EXISTS family_db;
CREATE DATABASE family_db;
USE family_db;
-- CREATE TABLE for department

CREATE TABLE department(
    dept_id INT AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dept_id)
);

-- CREATE TABLE for role
CREATE TABLE family_role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    allowance INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dept_id) REFERENCES department (dept_id)
);

-- CREATE TABLE for family

CREATE TABLE family_members(
   fm_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    fm_role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (fm_id),
    FOREIGN KEY (fm_role_id) REFERENCES family_role (role_id),
    FOREIGN KEY (manager_id) REFERENCES family_members(fm_id)
);

-- select from family_db for department
SELECT * FROM family_db.department