const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common.controller');
const authenticateUser = require('../middleware/auth.middleware');

router.get('/:id', commonController.findCommonById);
router.post('/create', authenticateUser, commonController.createCommon);
router.put('/update/:id', authenticateUser, commonController.updateCommon);

module.exports = router;
