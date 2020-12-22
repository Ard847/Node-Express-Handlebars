const mysql = require("mysql");
const { Sequelize, DataTypes } = require('sequelize');
const password = process.argv[2];

const connection = new Sequelize(
    'burger',
    'root',
    password,
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );

  connection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  
  module.export = connection