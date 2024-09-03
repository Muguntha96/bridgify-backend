import mongoose from "mongoose"
const Schema=mongoose.Schema

const eventSchema=new Schema({
  title:{
    type:String,
    required:true},
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  location:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

const Event=mongoose.model('Event',eventSchema)

export {
  Event
}