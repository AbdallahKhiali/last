const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync("public")) {
            fs.mkdirSync("public");
        }

        if (!fs.existsSync("public/images")) {
            fs.mkdirSync("public/images");
        }

        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/webp' || file.mimetype === 'image/avif'|| file.mimetype === 'image/jfif') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const uploadImages = multer({
    storage: storage,
    limits: {
        fileSize: 5012 * 5012 * 5
    },
    fileFilter: fileFilter
});

module.exports = { uploadImages }