const mongoose = require("mongoose")
const BlogSchema = new mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    complete: { type: Boolean, require: false },
}, { timestamps: true })
module.exports = mongoose.model("Blog", BlogSchema)