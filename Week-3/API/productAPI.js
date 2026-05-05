import exp from 'express'
import {productModel} from '../models/productModel.js'
import { verifyToken }from '../middleware/verifyToken.js'
export const productApp=exp.Router()
//import {hash} from 'bcryptjs'

productApp.post("/products",verifyToken,async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body
    //create new product document
    const newProductDocument=new productModel(newProduct)
    //save
    await newProductDocument.save()
    //send res
    res.status(201).json({message:"Product created"})
})

productApp.get("/products",verifyToken,async(req,res)=>{
    //read all products from db
    let productList=await productModel.find()
    //send res
    res.status(200).json({message:"products",payload:productList})
})

productApp.get("/products/:productId",verifyToken,async(req,res)=>{
        //Read object id from req params
        const pid=req.params.productId
        //find product by Id
        //const productObj=await productModel.findOne({_id:uid})
        const productObj=await productModel.findById(pid)
        //if product not found
        if(!productObj)
            return res.status(404).json({message:"Product not found"})
        
        //send res
        res.status(200).json({message:"product",payload:productObj})
})

productApp.put("/products/:productId",verifyToken,async(req,res)=>{
        //get modified product from req
        const modifiedProduct=req.body
        const pid=req.params.productId
        //find product by id & update
        const updatedProduct=await productModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{new:true,runValidators:true})
        res.status(200).json({message:"Product updated",payload:updatedProduct})
})

productApp.delete("/products/:productId",verifyToken,async(req,res)=>{
        //get id from req params
        const pid=req.params.productId
        //find and delete product by id
        const deletedProduct=await productModel.findByIdAndDelete(pid)
        if(!deletedProduct)
            return res.status(404).json({message:"Product not found"})
        res.status(200).json({message:"Product deleted",payload:deletedProduct})
})

