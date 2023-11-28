const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testing",
  password: "",
  waitForConnections: true,
});

module.exports = connection;
