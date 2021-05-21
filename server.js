const express = require('express');
const path = require('path');
const dbFile = require('./db/db.json');
const id = Math.floor(Math.random() * 50);
const fs = require('fs');

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
app.get('/api/notes', (req, res) => {
  const file = JSON.parse(fs.readFileSync('db/db.json')); //new code added 
  
  //res.json(file) //previously 'dbfile'
  return file;
});
//writeFileAsync('db/db.json', JSON.stringify(note));

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = id  //giving new note an id

  //const updatedArray = dbFile.push(newNote);  // new code added
  const file = fs.writeFileSync('db/db.json', JSON.stringify(newNote));

  // res.json(file); //previously 'newNote'
  return file;
});

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