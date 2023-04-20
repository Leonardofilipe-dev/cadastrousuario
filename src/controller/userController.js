///import User from "../models/registerUser.js";
//import { response } from "express";

class UserController{
    static async register(req, res){
        try {
            res.send("Hello, World")
        } catch (error) {
            res.status(500).json()
        }
    }

    static async list(req, res){
        try {
            res.send("Hello, World")
        } catch (error) {
            res.status(500).json()
        }
    }

    static async seach(req, res){
        try {
            res.send("Hello, World")
        } catch (error) {
            res.status(500).json()
        }
    }

    static async update(req, res){
        try {
            res.send("Hello, World")
        } catch (error) {
            res.status(500).json()
        }
    }

    static async delete(req, res){
        try {
            res.send("Hello, World")
        } catch (error) {
            res.status(500).json()
        }
    }
}


export default UserController