const { Testimonial } = require('../models');

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const { content, name, designation } = req.body;
        const newTestimonial = await Testimonial.create({ content, name, designation });
        res.status(201).json(newTestimonial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create testimonial', details: error.message });
    }
};

// Retrieve all testimonials
exports.findAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve testimonials', details: error.message });
    }
};

// Retrieve a single testimonial by ID
exports.findTestimonialById = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findByPk(id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve testimonial', details: error.message });
    }
};

// Update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const { content, name, designation } = req.body;
        const testimonial = await Testimonial.findByPk(id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        testimonial.content = content;
        testimonial.name = name;
        testimonial.designation = designation;
        await testimonial.save();
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update testimonial', details: error.message });
    }
};

// Delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findByPk(id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        await testimonial.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete testimonial', details: error.message });
    }
};
