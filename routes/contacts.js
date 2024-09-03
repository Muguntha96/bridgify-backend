import { Router } from "express"
import * as contactCtrl from '../controllers/contacts.js'

const router=Router()

router.post('/contact',contactCtrl.createContact)
router.post('/subscribe',contactCtrl.createSubscribe)




export{
  router
}