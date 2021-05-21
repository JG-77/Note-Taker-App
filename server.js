const express = require('express');
const path = require('path');
const dbFile = require('./db/db.json');

// Set up for the Express App

const app = express();
const PORT = 3000; // process.env.PORT ||

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// accesses public folder
app.use(express.static('public'));

//routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// API routes
app.get('/api/notes', (req, res) => res.json(dbFile));

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = Math.floor(Math.random() * 50); //giving new note an id

  dbFile.push(newNote);
  res.json(newNote);
});

//route redirecting to homepage
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`Note Taker App listening on PORT ${PORT}`));