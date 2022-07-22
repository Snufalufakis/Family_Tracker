DROP DATABASE IF EXISTS family_db;
CREATE DATABASE family_db;

-- CREATE TABLE for department

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- CREATE TABLE for role

CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    allowance INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

-- CREATE TABLE for family

CREATE TABLE family(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

-- select from family_db for department
SELECT * FROM family_db.department