const express = require('express');
const path = require('path');

// Set up for the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
//app.get('/', (req, res) => res.send(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));



app.listen(PORT, () => console.log(`Note Taker App listening on PORT ${PORT}`));