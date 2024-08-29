const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.static("dist"))
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))

// Rouetr
app.use("/api/notes", require("./routes/blog.route"))

//  404 route
app.use("*", async (req, res) => {
    res.status(404).json({ message: "Resouece Not Found" })
})

// 5 Error Handler Route
app.use((error, req, res, next) => {
    console.log(error);

    res.status(500).json({ message: error.message || "something Went Wrong" })
})
//  6 Start Server
mongoose.connection.once("open", (req, res) => {
    console.log("MONGOOSE CONNECTION SUCCESS")
    app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))
})

