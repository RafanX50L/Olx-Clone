import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const Mconnect:string = process.env.MONGOOSE || '';
const mongo = () => {
    mongoose.connect(Mconnect)
        .then(() => {
            console.log("mongodb connected success");

        }
        )
        .catch((err) => {
            console.log(err);

        }
    )
}
export default mongo