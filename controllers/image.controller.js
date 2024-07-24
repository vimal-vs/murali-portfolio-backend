const path = require('path');
const multer = require('multer');

const APP_URL = "http://localhost:3001";
const documentPath = path.join(__dirname, "../uploads");

const allowedExtensions = /\.(jpg|jpeg|png|jfif|pdf|doc|docx|txt|ppt|pptx|3gp|mp4|mkv|flv|avi|xlsx|xls|kml)$/i;

const documentStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, documentPath);
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const fileExt = path.extname(originalName);
        const baseName = path.basename(originalName, fileExt);
        const uniqueName = `${baseName}-${Date.now()}${fileExt}`;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(allowedExtensions)) {
        return cb(new Error('Please upload a valid document!'), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: documentStorage,
    fileFilter: fileFilter
});

exports.uploadDocuments = upload.array('files');

exports.getDocumentURLs = (req) => {
    return req.files?.map(file => `${APP_URL}/uploads/${file.filename}`);
};