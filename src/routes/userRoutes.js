import express from "express"

import Controller from "../controller/userController.js"

const routes = express.Router()

routes
    .post("/user/", Controller.register)
    .get("/user/", Controller.list)
    .get("/user/:id/", Controller.seach)
    .put("/user/:id/", Controller.update)
    .delete("/user/:id/", Controller.delete)
        

export default routes