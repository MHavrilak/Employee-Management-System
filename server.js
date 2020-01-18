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

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});



console.table([
    {
        Department:
        Role:
        Employee:

    }
])


connection.query("Select * FROM employee").then((err,res)=>{console.table(res)})

    if (err) throw err;

    res.redirect("/");
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});