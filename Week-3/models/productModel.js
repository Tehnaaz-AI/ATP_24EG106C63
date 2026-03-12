import {model, Schema, version} from 'mongoose';
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)

const productSchema=new Schema({
    productId:{
        type:Number, 
        required:[true,"ProductId is required"]
    },
    productName:{
        type:String,
        required:[true,"Product Name required"]
    },
    price:{
        type:Number,
        required:[true,"Price required"],
        minPrice:[10000,"Minimum price is 10000"],
        maxPrice:[50000,"Maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand name required"]
    }


},
{
versionKey:false,
timestamps:true
})

export const productModel=model("product",productSchema)
