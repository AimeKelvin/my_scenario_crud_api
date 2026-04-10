import Router from 'express'
import bcrypt from 'bcrypt'
import {register, login, getProfile, logout} from "../controllers/auth.controller"
import sessionMiddleware from '../middleware/session'

const router = Router()
const users = [] 

router.post('/register', register)

router.post('/login', login)

router.get('/profile', sessionMiddleware, getProfile)

router.post('/logout', sessionMiddleware, logout )

export default router