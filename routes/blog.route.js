const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blog.controller');

router.post('/create', blogsController.createBlog);
router.get('/all', blogsController.getBlogs);
router.get('/findOne/:id', blogsController.getBlogById);
router.put('/update/:id', blogsController.updateBlog);
router.delete('/delete/:id', blogsController.deleteBlog);

module.exports = router;