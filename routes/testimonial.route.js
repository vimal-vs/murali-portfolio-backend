const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonial.controller');
const authenticateUser = require('../middleware/auth.middleware');

router.get('/', testimonialController.findAllTestimonials);
router.get('/:id', testimonialController.findTestimonialById);
router.post('/create', authenticateUser, testimonialController.createTestimonial);
router.put('/update/:id', authenticateUser, testimonialController.updateTestimonial);
router.delete('/delete/:id', authenticateUser, testimonialController.deleteTestimonial);

module.exports = router;