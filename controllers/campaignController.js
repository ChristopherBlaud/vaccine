const Campaign = require('../models/campaignModel'); // Importer le modèle Campaign

exports.createCampaign = async (req, res) => {
    try {
        const { name, eventDate, location } = req.body;

        if (!name) return res.status(400).json({ error: 'Name is required' });
        if (!eventDate) return res.status(400).json({ error: 'Event Date is required' });
        if (!location) return res.status(400).json({ error: 'Location is required' });

        const newCampaign = await Campaign.create({
            name,
            eventDate,
            location
        });

        res.status(201).json(newCampaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
