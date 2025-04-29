import 'reflect-metadata'

import express from "express"
import { registerRoutes } from "./routes"

// REFENCE EXPRESS
const app = express()
app.use(express.json())
// REGISTER ROUTES WITH REFLECT EXPRESS
registerRoutes(app)

app.get('/trial', (req, res) => {
    return res.send({
        queries: req.query
    })
})



const PORT = 3100
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))