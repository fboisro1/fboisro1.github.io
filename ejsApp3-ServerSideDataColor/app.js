var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.dataArray = [];
// just one "site" with 2 pages, / and about

app.songArray = [];

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


// uploads song
// sending a get with 1 param
// http://localhost:3000/uploadSongs
  app.get('/uploadSongs', function(req, res) {
    let id = req.param('id');
    let songDate = req.param('songDate');
    if(id != null){
        let aSong = {
            id: id,
            songDate: songDate
        }
    app.songArray.push(aSong);
    }
    res.render('pages/uploadSongs', { 
        songArray: app.songArray
     });
  });

 app.get('/display', function(req, res){
    res.render('pages/display', {
        songArray: app.songArray
    });
});

// doing this in www bin file to make Azure happy
app.listen(443);  // not setting port number in www.bin, simple to do here
console.log('443 is the magic port');

module.exports = app;
