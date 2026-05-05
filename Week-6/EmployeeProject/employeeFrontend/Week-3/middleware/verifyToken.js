import jwt from 'jsonwebtoken'
const {verify}=jwt



export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies?.token
    //if token is undefined (req is from unauthorized user)
    if(!token){
        return res.status(401).json({message:"Please login"})
    }
    try{
    //if token is exists
    const decodedToken=verify(token,'abcd')
    console.log(decodedToken)
    //attach decoded user to request
    req.user=decodedToken
    //call next
    next()
    }catch(err){
        res.status(401).json({message:"session expired, Please re-login"})
    }

}