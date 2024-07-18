const { Blog } = require('../models');

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, date, link, imageUrl, author, category } = req.body;
        const newBlog = await Blog.create({ title, content, date, link, imageUrl, author, category });
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog', details: error.message });
    }
};

// Retrieve all blogs
exports.findAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve blogs', details: error.message });
    }
};

// Retrieve a single blog by ID
exports.findBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve blog', details: error.message });
    }
};

// Update a blog by ID
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, date, link, imageUrl, author, category } = req.body;
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        blog.title = title;
        blog.content = content;
        blog.date = date;
        blog.link = link;
        blog.imageUrl = imageUrl;
        blog.author = author;
        blog.category = category;
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update blog', details: error.message });
    }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        await blog.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete blog', details: error.message });
    }
};