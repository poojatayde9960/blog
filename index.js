const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { app, httpServer } = require("./socket/socket")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)
// const app = express()

app.use(express.static("dist"))
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))


app.use("/api/notes", require("./routes/blog.route"))


app.use("*", (req, res) => {
    res.status(404).json({ message: "Resouece Not Found" })
})


app.use((error, req, res, next) => {
    console.log(error);

    res.status(500).json({ message: error.message || "something Went Wrong" })
})

mongoose.connection.once("open", (req, res) => {
    console.log("MONGOOSE CONNECTION SUCCESS")
    httpServer.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))
})

