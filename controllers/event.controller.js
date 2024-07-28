const { Event } = require('../models');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, imageUrls } = req.body;
        const newEvent = await Event.create({ title, description, date, imageUrls });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event', details: error.message });
    }
};

// Retrieve all events
exports.findAllEvents = async (req, res) => {
    const { limit } = req.query;
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    try {
        const events = await Event.findAll({
            order: [['id', 'ASC']],
            limit: parsedLimit,
        });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve events', details: error.message });
    }
};

// Retrieve a single event by ID
exports.findEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve event', details: error.message });
    }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, imageUrls } = req.body;
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        event.title = title;
        event.description = description;
        event.date = date;
        event.imageUrls = imageUrls;
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update event', details: error.message });
    }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        await event.destroy();
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete event', details: error.message });
    }
};