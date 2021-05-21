# Note-Taker-App ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![MIT](https://img.shields.io/badge/License-MIT-red.svg)


## GitHub Repository and Application
---

## Application Screenshots
---

## Description
---
The Note-Taker application allows users to easily create their own notes to and bring them up with the click of a button! The app features a home page that directs the user to 'notes' page once they click 'Get Started,' and previously saved notes will appear on the sidebar of the 'notes' page. Once the user enters text into the title and body section of the notes, a save icon will appear in the top-right corner of the page will enable the save functionality once clicked. The 'plus' icon also on the top-right corner of the page creates a new blank note when clicked. 

*Version 2.0*: In future updates, the delete functionality will be added to allow the option to delete notes that a user no longer wants to have saved.

## Technologies
---
### Node.js/Express

* Installed express dependency package
* Imported necessary packages to get server-end functionality established and working
* Set up express function and server 'PORT' variables
* Set up the Express properties to handle data parsing
* Set up express.static to access 'public' folder
* HTML and API routes set up using GET and POST requests
* The 'fs.writeFile' function added to write new db.json file when new notes are saved

### Javascript (Starter code)

* Index.js file sets up front-end functionality for saving, creating, and deleting notes

### CSS/Boottrap.css/Fontawesome (Starter code)

* Styling for the index.html and notes.html pages for the app
* Adds polished and clean UI for easy navigation
* Icons used to represent 'save', 'delete', and 'add new notes' buttons

### HTML (Starter code)

* Two app pages creates: A home screen and note-taking page 
* Nav bar on the top of the page
* Main *div* element on the home page to display application name and display 'Get Started' button
* Notes page is divided into two main sections: A sidebar displaying saved notes on the left, and a body section on the right for entering note text


## Contact 
Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License
[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---
The MIT License (MIT)

Copyright (c) 2011-2021 Twitter, Inc.
Copyright (c) 2011-2021 The Bootstrap Authors
Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> (Express.js)
Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com> (Express.js)
Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com> (Express.js)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.