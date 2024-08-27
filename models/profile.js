import mongoose from "mongoose"

const Schema= mongoose.Schema

const profileSchema = new Schema(
  {name:{type:String,required:true},
  image_usrl:{tupe:String,required:true},
  role:{type:String,required:true}}
)

const Profile= mongoose.model('Profile',profileSchema)

export{
  Profile
}