import "reflect-metadata";
import express from "express"
import { registerRoutes } from "./routes"

const app = express()
const PORT = 3100

// register routes 
registerRoutes(app)


// parse the request body object
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))