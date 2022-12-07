const inquirer = require('inquirer');
const express = require('express');
const app = express();
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const question=[
    {
      type: 'list',
      name:'action',
      message: "What would you like to do?",
      choices: ['View All Employees','Add Employee', 'Update Employee Role',
      'View All Roles',    'Add Role', 'View All Departments','Add Department']
    },
    {
    type: 'input',
    name:'newDepartment',
    message: "What is the name of the department"
  },
  {
    type: 'input',
    name:'firstName',
    message: "What is the employee's first name?"
  },
  {
    type: 'input',
    name:'lastName',
    message: "What is the employee's last name?"
  },
  { 
    type: 'list',
    name:'roles',
    message: "What is this employee's role?",
    choices: ["Sales Lead", "Salesperson","Lead Engineer","Software Engineer",
     "Account Manager", "Accountant","Legal Team Lead","Lawyer"
    ]
  },
  {
    type: 'input',
    name:'employeeSalary',
    message: "What is the salary of this role?"
  },
  {
    type: 'input',
    name:'assignedManager',
    message: "Who is the employee's manager?"
  },
  {
    type: 'input',
    name:'newRole',
    message: "What is the name of this role?"
  }];

  inquirer.prompt(question)

  const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );











