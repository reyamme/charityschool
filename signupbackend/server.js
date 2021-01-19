const express = require("express")
const mongoose = require("mongoose")
const app = express()
const routerUrls = require("./router/router")

const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATEBASE_ACCESS, () => console.log("Database connected "))

app.use(express.json())

app.use(cors())
app.use("/app", routerUrls)
app.listen(8000, () => console.log(" server is up"))