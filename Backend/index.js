const express=require("express")
const connection = require("./Config/db")

const app=express()

app.use(express.json())

require("dotenv").config()

app.get("/", (req,res)=>{
    res.send("Welcome to Movies")
})

app.listen(process.env.PORT, async()=>{
    try {
       await connection
       console.log("Server Running on Port", process.env.PORT) 
    } catch (error) {
        console.log(error)
    }
})