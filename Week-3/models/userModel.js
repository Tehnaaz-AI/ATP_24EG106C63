
import {model, Schema, version} from 'mongoose';

//create cart schema{ product,count}
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"//name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})

//Create  User Schema (username,password,email,age)
const userSchema=new Schema({

    //structure of user resource
    username:{
        type:String, //mongoose schema type (String)
        required:[true,"Username is required"],
        minLength:[4,"Minimum length of username is 4 characters"],
        maxLength:[6,"Maximum length of username is 6 characters"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email already exists"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema]},

    {
    versionKey:false,
    timestamps:true
})


//Generate UserModel
export const userModel=model("user",userSchema)

