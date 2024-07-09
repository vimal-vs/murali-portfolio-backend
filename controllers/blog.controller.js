const { Blog } = require('../models');

exports.createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const [updated] = await Blog.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        const updatedBlog = await Blog.findByPk(req.params.id);
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const deleted = await Blog.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
