const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcast.controller');
const authenticateUser = require('../middleware/auth.middleware');

router.get('/', podcastController.findAllPodcasts);
router.get('/:id', podcastController.findPodcastById);
router.post('/create', authenticateUser, podcastController.createPodcast);
router.put('/update/:id', authenticateUser, podcastController.updatePodcast);
router.delete('/delete/:id', authenticateUser, podcastController.deletePodcast);

module.exports = router;