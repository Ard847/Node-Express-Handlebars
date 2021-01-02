const burger = require("../models/burger")
const express = require("express") 
const server = express.Router()

 
let burgers

server.get("/",async (req,res) => {
    try{
        burgers = await burger(1)
        res.render("index",{burgers})
    }
    catch(e){
        console.log(e)
    }
})

server.post("/", async (req,res) => {
    try{
        await burger(2,{burger_name:req.body.textArea, devoured : 0 })
       res.redirect("/")
    }
    catch(e){
        console.log(e)
    }
})
server.put("/:id", async (req,res) => {
    try{
        await burger(3,Number(req.params.id))   
        //303: Redirect for undefined reason. Typically, 'Operation has completed, continue elsewhere. 
        res.redirect(303,"/")
    }
    catch(e){
        console.log(e)
    }
})

server.delete("/:id", async (req,res) => {
    try{
        await burger(4,Number(req.params.id))
        res.redirect(303,"/")
    }
    catch(e){
        console.log(e)
    }
})

module.exports = server