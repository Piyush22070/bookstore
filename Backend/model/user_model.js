import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true, // Fix: use `required` inside an options object, not as the type itself
      },
      email: {
        type: String,
        required: true, // Again, use `required` properly
      },
      password: {
        type: String,
        required: true, // Correct usage of required
      }
})

const User=mongoose.model("User",userSchema)
export default User