import pool from "../config/db.js";
import argon from "argon2"

class UserService {
    async createUser(req,res) {
        const { fullname, phone, password, role } = req.body
        const existUser = await pool.query('select * from users where phone=$1', [phone])

        if(existUser.rows.length){
            return{
                status:409,
                message: "Phone number is already created!"
            }
        }

        const hashPassword = await argon.hash(password)
        await pool.query('insert into users(fullname, phone, password, role) values ($1,$2,$3,$4', [fullname, phone, hashPassword, role])
        
        return {
            status: 201,
            message: "User created successfully!"
        }

    }
}

const userService = new UserService

export default userService