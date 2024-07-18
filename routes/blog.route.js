const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const authenticateUser = require('../middleware/auth.middleware');

router.get('/all', blogController.findAllBlogs);
router.get('/:id', blogController.findBlogById);
router.post('/create', authenticateUser, blogController.createBlog);
router.put('/update/:id', authenticateUser, blogController.updateBlog);
router.delete('/delete/:id', authenticateUser, blogController.deleteBlog);

module.exports = router;