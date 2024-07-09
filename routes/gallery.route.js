const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery.controller');

router.post('/create', galleryController.createGalleryItem);
router.get('/all', galleryController.getGalleryItems);
router.get('/findOne/:id', galleryController.getGalleryItemById);
router.put('/update/:id', galleryController.updateGalleryItem);
router.delete('/delete/:id', galleryController.deleteGalleryItem);

module.exports = router;