const { Gallery } = require('../models');

exports.createGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.create(req.body);
        res.status(201).json(galleryItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.findAll();
        res.status(200).json(galleryItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getGalleryItemById = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByPk(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ error: 'Gallery item not found' });
        }
        res.status(200).json(galleryItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateGalleryItem = async (req, res) => {
    try {
        const [updated] = await Gallery.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Gallery item not found' });
        }
        const updatedGalleryItem = await Gallery.findByPk(req.params.id);
        res.status(200).json(updatedGalleryItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteGalleryItem = async (req, res) => {
    try {
        const deleted = await Gallery.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Gallery item not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};