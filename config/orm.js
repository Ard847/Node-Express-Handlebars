const connection = require("./connection")

 

const selectAll = async () => {
    await connection.query("Select * from burgers",(err,res) =>{
        if(res){
            console.log(res)
        }else{
            console.log("Error: ", err)
        }
    })
}

const insertOne = async () => {
    await connection.query("select * from burgers",(err,res) =>{
        if(res){
            console.log(res)
        }else{
            console.log("Error: ", err)
        }
    })
}

const updateOne = async () => {
    await connection.query("Select * from burgers",(err,res) =>{
        if(res){
            console.log(res)
        }else{
            console.log("Error: ", err)
        }
    })
}
 

module.export = {selectAll,insertOne,updateOne}