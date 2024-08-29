const { getAllBlog, addBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()
router
    .get("/", getAllBlog)
    .post("/add", addBlog)
    .put("/update/:id", updateBlog)
    .delete("/delete/:id", deleteBlog)
module.exports = router