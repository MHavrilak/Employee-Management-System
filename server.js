var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var PORT = process.env.PORT || 8080;


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_info_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
  startSearch()
});


function startSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Department?",
        "Add Role?",
        "Add Employee?",
        "View Department?",
        "View Role?",
        "View Employee?",
        "Update Employee role?"
        
      ]
    }).then(function(answer) {
      let query = answer.action;
      if(query == "Add Department?") {
        addDept();
      }else if(query == "Add Role?") {
        addRoles();
      }else if(query == "Add Employee?") {
        addEmployee();
      }else if(query == "View Department?") {
        viewDept();
      }else if(query == "View Role?") {
        viewRoles();
      }else if(query == "View Employee?") {
        viewEmployee();
      }else if(query == "Update Emploiyee role?") {
        updateEmployeeRole();
      }
    })
}

function addDept() {
  inquirer
  .prompt ({
    name: "action",
    type: "text",
    message: "What Department are you adding?",
  }).then(function(answer) {
    connection.query("INSERT INTO department (name) VALUES (?)", [answer.action], (err, res) => { 
      if(err) throw err;
      console.log("Department Added"); 
      startSearch()
          
        });
  })
  
    };

function addRoles() {
  inquirer
  .prompt ([
    {
    name: "role",
    type: "text",
    message: 
      "What Role are you adding?",
    },
    {
    name: "salary",
    type: "text",
    message: 
      "What is the salary?",
    },
    {
    name: "department",
    type: "text",
    message: 
      "What is the Department ID?"
    },
  ])
  .then(function(answer) {
   let question =  connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.role, answer.salary, answer.department], (err, res) => { 
      if(err) throw err;
      console.log("Role Added"); 
      startSearch()
          
        });
        
  
       });

      };
function addEmployee() {
  inquirer
  .prompt ({
    name: "action",
    type: "text",
    message: "Which Employee are you adding?",
  }).then(function(answer) {
    connection.query("INSERT INTO employee (first_name last_name) VALUES (?)", [answer.action], (err, res) => { 
      if(err) throw err;
      console.log("Employee Added"); 
      startSearch()
          
        });
        
      });
        };

function viewDept() {
  connection.query("Select * FROM department", (err, res) => {  
      if(err) throw err;
      console.table(res)
      startSearch()
          
        });
      }
 function viewRoles() {
  connection.query("Select * FROM role", (err, res) => {  
    if(err) throw err;
    console.table(res)
    startSearch()
        
      });
 }   
function viewEmployee() {
  connection.query("Select * FROM employee", (err, res) => { 
    
    if(err) throw err;
    console.table(res) 
    startSearch()
        
      });
}
function updateEmployeeRole() {
  inquirer
    .prompt({
      name: "action",
      type: "text",
      message: "Which Employee Role are you updating?",
    })
  connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.action, answer.action2], (err, res) => { 
     
    if(err) throw err;
    console.table(res)
    startSearch()
        
      });
}






