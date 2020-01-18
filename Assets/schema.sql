DROP DATABASE IF EXISTS employee_info_db;

CREATE employee_info_db;

USE employee_info_db;

CREATE TABLE department (
  id NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC NOT NULL,
    department INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id)

);