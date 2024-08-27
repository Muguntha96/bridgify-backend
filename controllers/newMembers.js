import { NewMember } from "../models/newMember.js"

async function create(req,res) {
  try {
    const newMember=await NewMember.create(req.body)
    res.status(201).json(newMember)
  } catch (error) {
    res.status(500).json({error:"An error occured while adding the new member.Please try again later."})
  }
}

async function index(req,res) {
  try {
    const newMembers = await NewMember.find({}).sort({ createdAt: 'desc' })
    res.json(newMembers)
    
  } catch (error) {
    res.status(500).json({error:"Oops! We encountered an issue while trying to display the club members. Please try again later or contact support if the problem persists"})
  }
}

export{
  create,
  index
}