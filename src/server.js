import express from "express"
import userRouter from "./routers/users.js"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(process.env.PORT, () => console.log("Server ishlayabdi..."))