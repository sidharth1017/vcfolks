require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;
const DbConnect = require("./db");
DbConnect();

// CORS 
const cors = require("cors");
app.use(cors());

// Exporting Routes 
const router = require('./routes');
app.use(express.json());
app.use(router);

// Serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));