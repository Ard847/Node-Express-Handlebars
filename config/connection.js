const mysql = require('mysql');
require("dotenv").config()

const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    port: 3306,
    user: 'b0140bce32faec',
    password: process.env.dbPassword,
    database: 'heroku_8013949c7ec22e4',
  });
 
module.exports = connection