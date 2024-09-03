import { Contact,Subscribe } from "../models/contact.js"

async function createContact(req,res) {
try {
  const contact=await Contact.create(req.body)
  res.status(200).json(contact)
} catch (error) {
  res.status(500).json(error)
}
}

async function createSubscribe(req,res) {
  try {
    const subscribe=await Subscribe.create(req.body)
    res.status(200).json(subscribe)
  } catch (error) {
    res.status(500).json(error)
  }
  }

export {
  createContact,
  createSubscribe
}