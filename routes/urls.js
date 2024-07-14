const express = require("express");
const router = express.Router();
const {generateUrl} = require("../controllers/urlsController")
// Define a GET route for /url
router.get('/', (req, res) => {
    res.send("Welcome to the URL shortener API");
});

// Define a POST route for /url
router.post('/',generateUrl);

module.exports = router;
