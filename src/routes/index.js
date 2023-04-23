import express from "express"

import userRoutes from "./userRoutes.js"

const routes = (app) => {
    app.use(
        express.json(),
        express.urlencoded({extended:true}),
       
        userRoutes
        )
}

export default routes