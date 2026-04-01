import express from "express"
import db from "./config/db.js"
import serviceRoutes from "./routes/service.routes.js"

const app = express()
let PORT = 8080

app.use(express.json())
app.use('/api', serviceRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is operational on http://localhost:${PORT} !`)
})