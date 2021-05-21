//Packages and variables
const express = require('express');
const path = require('path');
const dbFile = require('./db/db.json');
const id = Math.floor(Math.random() * 50);
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('db/db.json'));

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
//GET request
app.get('/api/notes', (req, res) => {
  
  res.json(file); 
});

//POST request
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  // Giving new note an id
  newNote.id = id  

  //Pushing new note into db array
  file.push(newNote); 
  fs.writeFileSync('db/db.json', JSON.stringify(file));

  res.json(file);
});

//DELETE request
app.delete(`/api/notes/${id}`, (req, res) => { //delete note function
  const notes = req.body;

  notes.filter(id => notes.id == id);

console.log(notes);
console.log(`${id}`);
console.log(id);

  dbFile.push(notes);
  res.json(notes);
});

//route redirecting to homepage
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`Note Taker App listening on PORT ${PORT}`));