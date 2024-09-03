import { text } from "express"
import mongoose from "mongoose"

const Schema=mongoose.Schema

const contactSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

const subscribeSchema=new Schema({
  email:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

const Contact=mongoose.model('Contact',contactSchema)
const Subscribe=mongoose.model('Subscribe',subscribeSchema)

export{
  Contact,
  Subscribe
}