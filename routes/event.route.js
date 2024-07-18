const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');
const authenticateUser = require('../middleware/auth.middleware');

router.get('/', eventController.findAllEvents);
router.get('/:id', eventController.findEventById);
router.post('/create', authenticateUser, eventController.createEvent);
router.put('/update/:id', authenticateUser, eventController.updateEvent);
router.delete('/delete/:id', authenticateUser, eventController.deleteEvent);

module.exports = router;
