const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const blogsRoutes = require('./blog.route');
const podcastsRoutes = require('./podcast.route');
const testimonialsRoutes = require('./testimonial.route');
const galleryRoutes = require('./gallery.route');

const authenticateUser = require('../middleware/auth.middleware');
// router.use(authenticateUser);

router.use('/auth', authRoutes);
router.use('/blogs', blogsRoutes);
router.use('/podcasts', podcastsRoutes);
router.use('/testimonials', testimonialsRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;