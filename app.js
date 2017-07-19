var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var routes = require('./routes');
// Home Routes
app.get('/',  routes.home);

// Movie Single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

app.listen(3000, function () {
    console.log("This application is running on http://localhost:3000");
});