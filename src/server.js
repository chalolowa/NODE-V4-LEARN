const express = require('express');

const app = express();

app.get('/', (req,res) => {
    console.log('Hello ther express server');
    res.status(200);
    res.json({message: 'Hello'});
});

module.exports = app;