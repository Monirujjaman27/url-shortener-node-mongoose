const express = require("express");
const url_route = require("./routes/urls");
const { connectDB } = require("./mongoosConnection");

const app = express();
const port = 8000;

// Connect to MongoDB
connectDB("mongodb://127.0.0.1:27017/url_shortener")
    .then(() => { console.log('MongoDB connected'); })
    .catch(err => { console.error('MongoDB connection error:', err); });

// Use express.json() to parse JSON requests
app.use(express.json());

// Use the url_route for /url endpoint
app.use('/url', url_route);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
