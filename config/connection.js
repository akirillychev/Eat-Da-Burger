var connection=null;
// Set up MySQL connection.
var mysql = require("mysql");
if (process.env.JAWSDB_URL && process.env.JAWSDB_URL.length>0)
{
  connection = mysql.createConnection(
    process.env.JAWSDB_URL
  );
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Hardwater55",
    database: "burger_db"
  });
}
 

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;