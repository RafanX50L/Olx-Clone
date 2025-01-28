import user from "../model/user";
import { Request,Response } from "express";
const salt = 10;
import bcrypt from 'bcrypt';

interface comingdata{
    name:string,
    email:string,
    password:string,
}

export const signup = async (req:Request,res:Response)=>{
    console.log('nice')
    try {
        const {name,email,password}= req.body as comingdata;
        const Bpass = await bcrypt.hash(password,salt);
        const datas = new user({
            name:name,
            email:email,
            password:Bpass,
        })
        const saves = await datas.save()
        if(saves){
            console.log('adsfasd')
            res.status(201).json({succees:true});
            return
        }else{
            res.status(400);
        }
        console.log(datas)

    } catch (error) {
        console.log(error);
    }
}
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: comingdata = req.body;


    const User = await user.findOne({ email: email });
    if (!User) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    if (!User.password || typeof User.password !== "string") {
      res.status(500).json({ success: false, message: "Invalid user data" });
      return;
    }

    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: "Invalid email or password" });
      return;
    }

    console.log("Login successful:", User.email);
    res.status(200).json({ success: true, message: "Login successful" });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


