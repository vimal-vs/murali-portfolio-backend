const { Testimonial } = require('../models');

exports.createTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.create(req.body);
        res.status(201).json(testimonial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByPk(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTestimonial = async (req, res) => {
    try {
        const [updated] = await Testimonial.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        const updatedTestimonial = await Testimonial.findByPk(req.params.id);
        res.status(200).json(updatedTestimonial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        const deleted = await Testimonial.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
