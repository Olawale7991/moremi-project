import express from 'express'
import {registerPartner, loginPartner} from '../controller/partnerController.js'

const partnerRouter = express.Router()

partnerRouter.post('/register', registerPartner)
partnerRouter.post('/login', loginPartner)


export default partnerRouter