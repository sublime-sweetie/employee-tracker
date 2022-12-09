const inquirer = require('inquirer');
const express = require('express');
const app = express();
const delay = require('express-delay');
const mysql = require('mysql2');
// const routes = require('./routes');
// app.use(routes);

const PORT = process.env.PORT || 3001;

const showBanner = require('node-banner');
 
showBanner('Employee Manager', 'Manage efficiently.', 'blue','green');

 
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
    default: 'N/A',
    message: "What is the salary of this role?"
  },
  {
    type: 'input',
    name:'assignedManager',
    default: 'N/A',
    message: "Who is the employee's manager?"
  },
  {
    type: 'input',
    name:'newRole',
    message: "What is the name of this role?"
  }];



// setTimeout(init, 5000);
// app.listen(PORT);
// app.listen(PORT, () => console.log('Now listening'));



  inquirer.prompt(question)


// const updateEmployeeRole = () => {

//     db.query(`SELECT * FROM employee`, (err, res) => {
//         if (err) throw err;
//         let employees = (employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.id}));
//         inquirer.prompt([
//             {
//                 name: 'employee',
//                 type: 'rawlist',
//                 message: 'What employee do you want to update?',
//                 choices: employees
//             }
//         ])
//     })
//     app();
// }









