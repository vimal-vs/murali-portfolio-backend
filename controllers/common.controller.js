const { Common } = require('../models');

exports.createCommon = async (req, res) => {
    try {
        const { statistics, footer, landing, links } = req.body;
        const newCommon = await Common.create({ statistics, footer, landing, links });
        res.status(201).json(newCommon);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Common entry', details: error.message });
    }
};

exports.findCommonById = async (req, res) => {
    try {
        const { id } = req.params;
        const common = await Common.findByPk(id);
        if (!common) {
            return res.status(404).json({ error: 'Common entry not found' });
        }
        res.status(200).json(common);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Common entry', details: error.message });
    }
};

exports.updateCommon = async (req, res) => {
    try {
        const { statistics, footer, landing, links } = req.body;
        const { id } = req.params;
        const common = await Common.findByPk(id);
        if (!common) {
            return res.status(404).json({ error: 'Common entry not found' });
        }
        common.statistics = statistics;
        common.footer = footer;
        common.landing = landing;
        common.links = links;
        await common.save();
        res.status(200).json(common);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Common entry', details: error.message });
    }
};