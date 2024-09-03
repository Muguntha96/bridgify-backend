import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'

const router=Router()

router.post('/',eventsCtrl.create)
router.get('/',eventsCtrl.index)




export{
  router
}