const express = require('express');
const router = express.Router();
const testimonialsController = require('../controllers/testimonial.controller');

router.post('/create', testimonialsController.createTestimonial);
router.get('/all', testimonialsController.getTestimonials);
router.get('/findOne/:id', testimonialsController.getTestimonialById);
router.put('/update/:id', testimonialsController.updateTestimonial);
router.delete('/delete/:id', testimonialsController.deleteTestimonial);

module.exports = router;