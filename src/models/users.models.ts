import * as mongoose from "mongoose"
export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        required:true
    },
    phone: {
      type: String,
      // required: true
    }
  })