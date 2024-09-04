import { Router } from "express"
import * as contactCtrl from '../controllers/contacts.js'

const router=Router()

router.post('/contacts',contactCtrl.createContact)
router.post('/subscribe',contactCtrl.createSubscribe)
router.post('/unsubscribe',contactCtrl.unSubscribe)




export{
  router
}