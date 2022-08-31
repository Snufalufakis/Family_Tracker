# Family Tracker

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

### User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

### Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### Links

- Solution URL: [Github](https://github.com/Snufalufakis/Family_Tracker)

## My process

### Built with

- MySQL
- inquirer
- Node.js
- JavaScript

### What I learned

For this project I learned how to use MySQL and how to use inquirer to create a command line application. I also learned how to use the MySQL npm package to connect to a MySQL database and perform queries.

```
CREATE TABLE family_members(
   fm_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    fm_role_id INT,
    manager_id INT,
    PRIMARY KEY (fm_id),
    FOREIGN KEY (fm_role_id) REFERENCES department (dept_id,dept_name),
    FOREIGN KEY (manager_id) REFERENCES family_members(fm_id)
);
```

### Continued development

I would like to continue to learn more about MySQL and how to use it to create databases and tables. I would also like to learn more about how to use inquirer to create a command line application. While diving deeper into MySQL and inquirer I would also like to learn more about how to use the MySQL npm package to connect to a MySQL database and perform queries. This is very much a wip still need to display allowance and delete function.

### Useful resources

- [StackOverFlow](https://stackoverflow.com/) - This helped me for all of my errors so far.
- [dba.stackexchange](https://dba.stackexchange.com/) - This was my goto for sql errors if S.O didn't have the answer.

## Author

- Twitter - [@Snufalufakis2](https://www.twitter.com/Snufalufakis2)
