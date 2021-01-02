const connection = require("./connection");
 
const selectAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM burgers;`, (error, data) => {
      if (error) {
        console.log("Error while reading from DB:", error);
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
};


const insert = (toInsert) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${toInsert.burger_name}", ${toInsert.devoured});`, (error, data) => {
      if (error) {
        console.log("Error while saving to DB:", error);
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
};

const update = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ${data};`, (error, data) => {
      if (error) {
        console.log("Error while updating DB:", error);
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
};

const deleted = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM burgers WHERE id = ${data};`, (error, data) => {
      if (error) {
        console.log("Error while updating DB:", error);
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
};

module.exports = {
  selectAll,
  insert,
  update,
  deleted
}