import nodemailer from 'nodemailer'
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
    const {email} = req.body
    const existingSubscription = await Subscribe.findOne({email})
    if(existingSubscription){
      return res.status(400).json({message:"Email is already subscribed"})
    }
    const subscribe=await Subscribe.create({email})
    sendWelcomeEmail(email)
    res.status(200).json(subscribe)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
  }

  async function unSubscribe(req,res) {
    try {
      const {email}=req.body
      await Subscribe.findOneAndDelete({email})
      res.status(200).json({message:'You have been unsubscribed.'})
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  }

  function sendWelcomeEmail(email){
    const transport=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
      }
    })

    const mailOptions={
      from:process.env.EMAIL,
      to:email,
      subject:'Welcome to Bridgify',
      htm:`
          <h1>Welcome to Bridgify</h1>
      <p>Thank you for subscribing to our club updates. You will receive notifications about upcoming events and news.</p>
      <p>If you wish to unsubscribe, click <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${email}">here</a>.</p>
      `
  
    }

    transport.sendMail(mailOptions,(error,info)=>{
      if(error){
        console.error(error)
      }else{
        console.log(info.response)
      }
    })

  }
export {
  createContact,
  createSubscribe,
  unSubscribe
}