import express from "express"
import userController from "../controllers/users.js"

const router = express.Router()

router
    .post("/api/v1/users",userController.createUser)

export default router