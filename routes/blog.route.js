const { getAllBlog, addBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()
router
    .get("/", getAllBlog)
    .get("/add", addBlog)
    .get("/update/:id", updateBlog)
    .get("/delete/:id", deleteBlog)
module.exports = router