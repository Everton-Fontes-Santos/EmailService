import express from "express";
import bodyParser from "body-parser";
import emailRouter from "./routes/email.js";

const app = express()

app.use(bodyParser.json())
app.use('/email', emailRouter)

export default app