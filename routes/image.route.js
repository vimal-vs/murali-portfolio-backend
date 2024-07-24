const express = require('express');
const router = express.Router();
const { uploadDocuments, getDocumentURLs } = require('../controllers/image.controller');

router.post('/upload', (req, res) => {
    uploadDocuments(req, res, (err) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        const urls = getDocumentURLs(req);
        res.status(200).send({ files: urls });
    });
});

module.exports = router;
