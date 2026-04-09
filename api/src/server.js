import express from "express"
import db from "./config/db.js"
import serviceRoutes from "./routes/service.routes.js"
import carRoutes from "./routes/car.routes.js"
import cors from "cors"
import dotenv from "dotenv"
import session from "express-session"
import cookieParser from "cookie-parser"

dotenv.config()


const app = express()

app.use(
    session({
        name: "sessionId",
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
)

app.use(cors())
let PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api', serviceRoutes)
app.use('/api', carRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is operational on http://localhost:${PORT} !`)
})