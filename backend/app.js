import Express from "express";
import "express-async-errors"
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import router from "./routes/index.routes.js";

const app = Express()
app.use(cors())
app.use(Express.json())

const port = process.env.PORT_NUMBER || 5000;

app.use("/api/v1", router)

app.listen(port , () => {
    console.log(`App is running on port ${port}`);
})

 