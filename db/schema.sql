DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE employeeTable (

  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  employeeRole VARCHAR(30) NOT NULL,
  salary INT

);
CREATE TABLE managers (
  manager VARCHAR(30) PRIMARY KEY,
  department VARCHAR(30),
  staff INT
);
--   manager VARCHAR(30)
--   FOREIGN KEY (managers)
--   REFERENCES managers(manager)
--   ON DELETE SET NULL
