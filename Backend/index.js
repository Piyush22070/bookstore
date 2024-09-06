import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./Route/book.route.js"
import userRoute from "./Route/user.route.js"
const app = express()
app.use(cors())
dotenv.config()

const PORT = process.env.PORT||4000
const MONGO_URI=process.env.MONGO_URI

try{
    mongoose.connect(process.env.MONGO_URI, {
        
      });
      
console.log("connected to mongoDB")
}
catch(error){
    console.log("error",error)
}

app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})