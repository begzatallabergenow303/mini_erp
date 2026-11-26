import userService from "../services/users.js";
import { configDotenv } from "dotenv";
configDotenv()

class UserController{
    async createUser(req,res){
        let resData = userService.createUser(req)

        return res.status(resData.status).json(resData)
    } 
}

const userController = new UserController

export default userController