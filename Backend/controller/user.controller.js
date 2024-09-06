import User from "../model/user_model.js";
import bcryptjs from'bcryptjs'
export const signup=async (req,res)=>{
    try {
        const{name,email,password}=req.body;
        const user= await User.findOne({email})

        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        const hashpassword= await bcryptjs.hash(password,10);
            const createduser=new User({
                name,email,password:hashpassword
            })
        createduser.save();
        res.status(201).json({message:"user created succesfully",user:{
            name:createduser.name,email:createduser.email
        }});
    } catch (error) {
        console.log("error"+error.message);
        res.status(500).json({message:"internal server error"})
    }
}

export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})
        const ismatch= await bcryptjs.compare(password,user.password)
        if(!user||!ismatch){
            return res.status(400).json({message:"invalid username"})
        }
        else{
            res.status(200).json({message:"login succesful" ,user:{
                _id:user._id,
                fullname:user.name,
                email:user.email,
            }})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internale server error "})
    }
}