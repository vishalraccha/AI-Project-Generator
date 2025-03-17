import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connect.js"

dotenv.config()
connectDB();
const app=express()

const PORT=process.env.PORT || 5000

app.use(cors())
app.use(express.json())    

app.get("/", (req,res)=>{
    res.send("Server is running")
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})