const { Podcast } = require('../models');

// Create a new podcast
exports.createPodcast = async (req, res) => {
    try {
        const { title, description, url } = req.body;
        const newPodcast = await Podcast.create({ title, description, url });
        res.status(201).json(newPodcast);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create podcast', details: error.message });
    }
};

// Retrieve all podcasts
exports.findAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.findAll();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve podcasts', details: error.message });
    }
};

// Retrieve a single podcast by ID
exports.findPodcastById = async (req, res) => {
    try {
        const { id } = req.params;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        res.status(200).json(podcast);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve podcast', details: error.message });
    }
};

// Update a podcast by ID
exports.updatePodcast = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, url } = req.body;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        podcast.title = title;
        podcast.description = description;
        podcast.url = url;
        await podcast.save();
        res.status(200).json(podcast);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update podcast', details: error.message });
    }
};

// Delete a podcast by ID
exports.deletePodcast = async (req, res) => {
    try {
        const { id } = req.params;
        const podcast = await Podcast.findByPk(id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        await podcast.destroy();
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete podcast', details: error.message });
    }
};