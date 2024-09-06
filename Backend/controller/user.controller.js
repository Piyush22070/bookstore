import User from "../model/user_model.js";

export const signup=(req,res)=>{
    try {
        const{fullname,email,password}=req.body;
        const user=User.findOne({email})

        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        
            const createduser=new User({
                fullname,email,password
            })
        createduser.save();
        res.status(201).json({message:"user created succesfully"});
    } catch (error) {
        console.log("error"+error.message);
        res.status(500).json({message:"internal server error"})
    }
}