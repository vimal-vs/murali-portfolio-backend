const express = require('express');
const router = express.Router();
const podcastsController = require('../controllers/podcast.controller');

router.post('/create', podcastsController.createPodcast);
router.get('/all', podcastsController.getPodcasts);
router.get('/findOne/:id', podcastsController.getPodcastById);
router.put('/update/:id', podcastsController.updatePodcast);
router.delete('/delete/:id', podcastsController.deletePodcast);

module.exports = router;