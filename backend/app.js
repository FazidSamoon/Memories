import Express from "express";
import "express-async-errors"
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import router from "./routes/index.routes.js";
import connectDB from "./database/connect.js";

const app = Express()
app.use(cors())
app.use(Express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

const port = process.env.PORT_NUMBER || 5000;

app.use("/api/v1", router)

try {
    connectDB()
    app.listen(port , () => {
        console.log(`App is running on port ${port}`);
    })
} catch (error) {
    console.log(error);
}


 