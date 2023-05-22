const express = require('express');
const mongoose = require('mongoose');
// dotenv
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Successfully created get api.'
    })
})