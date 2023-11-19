const express=require("express")
const connection = require("./Config/db")
const postRoute=require("./Routes/Signup.route")
const movies=require("./Routes/movies.route")

const app=express()

app.use(express.json())

app.use("/users",postRoute)

app.use("/",movies )

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