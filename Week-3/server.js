import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './API/userAPI.js'
import { productApp } from './API/productAPI.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config() //process.env.port, process.env.db_url
const app=exp()

//start server
app.listen(process.env.port,()=>console.log("Server on port 4000..."))

//add body parser
app.use(exp.json())

//add cookie parser middleware
app.use(cookieParser())

//forward request to user app if path starts with /user-api
app.use("/user-api",userApp)

app.use("/product-api",productApp)

const port=process.env.port || 4000 //fallback value

//connect to DB Server (mongoDB)
async function connectDB() {
    try{
    await connect(process.env.db_url)
    console.log("DB connection success")
    }catch(err){
        console.log("err in DB connection :",err)
    }
    
}
connectDB()

//error handling middleware
//error => {name,message,callstack}

app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
    //Validation Error
    if(err.name==='ValidationError')
        return res.status(400).json({message:"Error occured",error:err.message})
    //Cast Error
    if(err.name==='CastError')
        return res.status(400).json({message:"Error occured",error:err.message})

    res.status(500).json({message:"error occured",error:"Server error occured"})
})

