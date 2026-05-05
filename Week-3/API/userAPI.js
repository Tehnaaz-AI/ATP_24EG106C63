//Create mini-express app ( Separate Route)
import exp from 'express'
import {userModel} from '../models/userModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middleware/verifyToken.js'
import {config} from 'dotenv'

const {sign}=jwt

export const userApp=exp.Router()


//Define user rest API route

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body
    //verify email
    let user=await userModel.findOne({email:email})
    //if email not exists
    if(!user){
        return res.status(404).json({message:"Invalid email"})
    }
    //compare passwords
    let result=await compare(password,user.password)
    //if passwords not match
    if(result===false){
        return res.status(400).json({message:"Invalid password"})
    }
    //if password is matched
        //create token (jsonwebtoken -jwt --jaat)
        const signedToken=sign({email:user.email},process.env.secret_key,{expiresIn:"1h"})
        //store token as httpOnly cookie
        res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
        })
        //send token in res
        res.status(200).json({message:"Login successful",payload:user})
})

    //Create new user
    userApp.post("/users",verifyToken,async(req,res)=>{
        //get new user obj from req
        const newUser =req.body;
        //hash the password
        const hashedPassword=await hash(newUser.password,10)
        //replace plain password with hashed password
        newUser.password=hashedPassword
        //Create new user document
        const newUserDocument=new userModel(newUser)
        //save
        const result=await newUserDocument.save()
        console.log(result)
        //send res
        res.status(201).json({message:"User Created"})


    })

    //Read all users
    userApp.get("/users",verifyToken,async(req,res)=>{
        //read all users from db
        let userList=await userModel.find()

        //send res
        res.status(200).json({message:"users",payload: userList})
    })

    //Read a user by ObjectId
    userApp.get("/user",verifyToken,async(req,res)=>{
        //Read user email from req 
        const emailOfUser=req.user?.email
        //find user by Id
        //const userObj=await userModel.findOne({_id:uid})
        const userObj=await userModel.findOne({email:emailOfUser}).populate("cart.product")
        //if user not found
        if(!userObj)
            return res.status(404).json({message:"User not found"})
        
        //send res
        res.status(200).json({message:"user",payload:userObj})
    })

    //Update a user by Id
    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        //get modified user from req
        const modifiedUser=req.body
        const hashedPassword=await hash(modifiedUser.password,10)
        modifiedUser.password=hashedPassword
        const uid=req.params.id
        if(!uid){
            res.status(404).json({message:"User not found"})
        }
        //find user by id & update
        const updatedUser=await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
        res.status(200).json({message:"User updated",payload:updatedUser})
    })

    //Delete a user by Id
    userApp.delete("/users/:id",verifyToken,async(req,res)=>{
        //get id from req params
        const uid=req.params.id
        //find and delete user by id
        const deletedUser=await userModel.findByIdAndDelete(uid)
        if(!deletedUser)
            return res.status(404).json({message:"User not found"})
        res.status(200).json({message:"User deleted",payload:deletedUser})
    })

///add product to the cart
/*userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url params
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email
    //add product to cart
    const result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    //if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"Product added to cart"})
})*/


   //Before add, first it should check that product is already in the cart
    //If the product is there, then increment count by 1
    //Otherwise add that product to cart

userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url params
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email
    //add product to cart

    const result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})

    //if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"Product added to cart"})
})





