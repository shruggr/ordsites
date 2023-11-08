// express static web server from the public folder 
// to serve up the index.html file

const express = require('express');
const app = express();
const path = require('path');

// serve up static files from the public folder
app.use('/public', express.static('public'));

// serve up the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
