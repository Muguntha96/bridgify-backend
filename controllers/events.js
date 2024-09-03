import { Event } from "../models/event.js"

async function create(req,res) {
  try {
    const newEvent=await Event.create(req.body)
    res.status(201).json(newEvent)
  } catch (error) {
    res.status(500).json({error:"Sorry,Currently we can not to create new event.Please try again later."})
  }
}

async function index(req,res) {
  try {
    const events=await Event.find({}).sort({ createdAt: 'desc' })
    res.json(events)
  } catch (error) {
    res.status(500).json({error:"Currently,We are facing some issues to display the events.Please try again later"})
  }
}

export{
  create,
  index
}