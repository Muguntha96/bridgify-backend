import mongoose from "mongoose"
const Schema = mongoose.Schema

const newMemberSchema=new Schema({
first_name:{type:String,required:true},
last_name:{type:String,required:true},
email:{type:String,required:true,unique:true},
phone_number:{type:String,required:true,unique:true},
student_id:{type:String,required:true,unique:true},
grade_level:{type:String,
  enum:['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
  required:true},
  cultural_background:{
    type:String,
    enum: [
      'African',
      'African American',
      'Afro-Caribbean',
      'Arab',
      'Asian',
      'Black',
      'Caribbean',
      'Central Asian',
      'East Asian',
      'Eastern European',
      'Hispanic/Latino',
      'Indigenous',
      'Jewish',
      'Middle Eastern',
      'Native American',
      'North African',
      'Pacific Islander',
      'South Asian',
      'Southeast Asian',
      'White/European',
      'Multiracial',
      'Other'
    ],
    required:true},
  volunteer_interest:{
    type:Boolean,
    required:true
  },
  role:{
    type:String,
    enum:["President","Vice President","Secretary","Treasurer","Volunteer Coordinator","General Member"],
    default:"General Member",
    required:true
  },
  profile_image:{
    type:String
  }

},
{
  timestamps:true}
)

const NewMember = mongoose.model('NewMember',newMemberSchema)

export{
  NewMember
}