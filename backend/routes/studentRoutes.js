import express from 'express'
import {registerStudent, loginStudent} from '../controller/studentController.js'

const studentRouter = express.Router()

studentRouter.post('/register', registerStudent)
studentRouter.post('/login', loginStudent)


export default studentRouter