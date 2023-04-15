import * as mongoose from "mongoose"
export const OtherSchema = new mongoose.Schema(
  {
    email:{
        type:String
    },
    fieldOne: {
      type: String,
    },
    fieldTwo:{
        type:String,
    },
  })