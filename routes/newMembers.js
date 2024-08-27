import { Router } from "express"
import * as newMembersCtrl from '../controllers/newMembers.js'

const router=Router()

router.post('/',newMembersCtrl.create)




export{
  router
}