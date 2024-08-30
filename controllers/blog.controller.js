const asyncHandler = require("express-async-handler")
const Blog = require("../modal/Blog")
const { io } = require("../socket/socket")
// const {io}=require("../socket/socket")

exports.getAllBlog = asyncHandler(async (req, res) => {

    const result = await Blog.find()
    res.json({ message: "blog fetch success", result })
})
exports.addBlog = asyncHandler(async (req, res) => {
    await Blog.create(req.body)
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    res.json({ message: "blog add bsuccess", result })
})
exports.updateBlog = async (req, res) => {
    const result = await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "blog update success" })
}
exports.deleteBlog = asyncHandler(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    const result = await Blog.find()
    io.emit("todo-create-responce", result)
    res.json({ message: "blog delete success" })
})
