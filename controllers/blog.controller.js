
const Blog = require("../modal/Blog")

exports.getAllBlog = async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "todo fetch success", result })
}
exports.addBlog = async (req, res) => {
    await Blog.create(req.body)
    res.json({ message: "todo add success" })
}
exports.updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
}
exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
}
