import User from "../models/registerUser.js";
import bcrypt from "bcryptjs"


class UserController {
    static async register(req, res) {
        try {
            const { nameUser, email, password, photo } = req.body
            let passwordHash = bcrypt.hashSync(password)
            let newUser = new User({ nameUser, email, password: passwordHash, photo })

            const result = await newUser.save()
            res.json(result)
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async list(req, res) {
        try {
            const listUser = await User.find()
            res.json(listUser)

        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async seach(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findById(id)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({ error })

        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id
            const { nameUser, email, password, photo } = req.body
            const userUpdate = await User.findByIdAndUpdate(id, { nameUser, email, password, photo })
            return res.status(200).json(userUpdate)
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const userDelete = await User.findByIdAndDelete(id)
            return res.status(200).json({ userDelete })
        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}

export default UserController