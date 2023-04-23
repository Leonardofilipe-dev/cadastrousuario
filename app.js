import express from "express"
import db from "./src/database/db.js"
import cors from "cors"
import routes from "./src/routes/index.js"
import handleError from "./src/middlewares/handleError.js"

db.on("error", console.log.bind(console, "error connecting to mongo"))
db.once("open", () =>{
    console.log("successfully connected")
})

const app = express()

const corsOptions = {
  exposedHeaders: ['token']
}

app.use(cors(corsOptions));

routes(app)

app.use(handleError.handle)
  app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })

  export default app