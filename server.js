const express = require('express');
const path = require('path');
const dbFile = require('./db/db.json');
const id = Math.floor(Math.random() * 50);
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
  newNote.id = id  //giving new note an id

  dbFile.push(newNote);
  res.json(newNote);
});

app.post(`/api/notes/${id}`, (req, res) => { //delete note function
  const notes = req.body;

  notes.splice(`${id}`, 1);

  dbFile.push(notes);
  res.json(notes);
});

//route redirecting to homepage
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`Note Taker App listening on PORT ${PORT}`));