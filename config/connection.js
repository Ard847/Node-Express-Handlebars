const mysql = require('mysql');
require("dotenv").config()
console.log(process.env.connection)
const connection = mysql.createConnection(process.env.connection);
 
module.exports = connection