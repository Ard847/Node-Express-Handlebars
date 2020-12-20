const express = require("express")
const path = require("path")
const server = express()
const port = 3000

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve("./")));
//server.use(express.static(path.join(__dirname, "./")));

server.get("/",(req,res) => {
    res.sendFile(path.resolve("./index.html"))
})

server.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port);
  });
  