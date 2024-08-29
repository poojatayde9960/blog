const mongoose = require("mongoose")
const BlogSchema = new mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
}, { timestamps: true })
module.exports = mongoose.model("Blog", BlogSchema)