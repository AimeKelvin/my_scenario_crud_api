import Router from 'express'
import bcrypt from 'bcrypt'
import sessionMiddleware from '../middleware/session'

const router = Router()
const users = [] 

router.post('/register', async (req,res) => {
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    users.push({username, password: hashedPassword})
    res.json({message: 'User registered successfully', users})
})

router.post('/login', async (req,res) => {
    const {username, password} = req.body
    const user = users.find(u => u.username === username)
    if(!user) {
        return res.status(400).json({message: 'Invalid credentials'})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        return res.status(400).json({message: 'Invalid credentials'})
    }
    req.session.user = {username: user.username}
    res.json({message: 'Login successful'})
})

router.get('/profile', sessionMiddleware, (req,res) => {
    res.json({message: 'Profile data', user: req.session.user})
})

router.post('/logout', sessionMiddleware, (req,res) => {
    req.session.destroy(err => {
        if(err) {
            return res.status(500).json({message: 'Logout failed'})
        }
        res.json({message: 'Logout successful'})
    })
})

export default router