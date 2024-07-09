const { Podcast } = require('../models');

exports.createPodcast = async (req, res) => {
    try {
        const podcast = await Podcast.create(req.body);
        res.status(201).json(podcast);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.findAll();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPodcastById = async (req, res) => {
    try {
        const podcast = await Podcast.findByPk(req.params.id);
        if (!podcast) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        res.status(200).json(podcast);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePodcast = async (req, res) => {
    try {
        const [updated] = await Podcast.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        const updatedPodcast = await Podcast.findByPk(req.params.id);
        res.status(200).json(updatedPodcast);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePodcast = async (req, res) => {
    try {
        const deleted = await Podcast.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Podcast not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
