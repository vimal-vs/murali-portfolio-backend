const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const blogRoutes = require('./blog.route');
const podcastRoutes = require('./podcast.route');
const testimonialRoutes = require('./testimonial.route');
const eventRoutes = require('./event.route');
const commonRoutes = require('./common.route');
const imageRoutes = require('./image.route');

router.use('/auth', authRoutes);
router.use('/blogs', blogRoutes);
router.use('/podcasts', podcastRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/events', eventRoutes);
router.use('/common', commonRoutes);
router.use('/image', imageRoutes);

module.exports = router;