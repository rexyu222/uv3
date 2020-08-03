// Get dependencies
const express = require('express');
//const path = require('path');
var http = require('http');
//var bodyParser = require('body-parser');
// Get our API routes
//const api = require('./server/routes/api');
const app = express();
// Parsers for POST data
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist/rexTechAObservableVsNGRX')));
//app.use(express.static(path.join(__dirname, 'dist/usEnermyscss6')));
//app.use(express.static(path.join(__dirname, 'dist/angular9awsdeploy2')));
//app.use(express.static(path.join(__dirname, 'archivesEng')));
//app.use(express.static(path.join(__dirname, 'archivesMand')));

//app.use(express.static(path.join(__dirname, 'image')));
//app.use(express.static(path.join(__dirname, 'dist/rexvideoeng')));
//app.use(express.static(path.join(__dirname, 'dist/rexvideomand')));

//var bluebird = require('bluebird');
//var mongoose = require('mongoose');
//mongoose.Promise = bluebird;

//mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useMongoClient: true})
//mongoose.connect('mongodb://127.0.0.1:27017/')
//mongoose.connect('mongodb://rexyu222:1965on0607@ds157040.mlab.com:57040/rexshopping', { useNewUrlParser: true})
//mongoose.connect('mongodb://127.0.0.1:27017/todoapp')
//mongoose.connect('mongodb://127.0.0.1:27017/mean-angular6')
/*mongoose.connect('mongodb://127.0.0.1:27017/dtvietnamwareng')
  .then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp`)})
  .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/todoapp`)})
*/
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

//var favicon = require('serve-favicon');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//set commentUs routes
//app.use('/urlLogsave', require('./urlLogRoutes/urlLogRoute'));

//set commentUs routes
//app.use('/commentussave', require('./commentUsRoutes/commentUsRoute'));

// routes
//app.use('/dbactions', require('./backend/routesapi/todos.route'));

app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, 'dist/rexTechAObservableVsNGRX/index.html'));
 // res.sendFile(path.join(__dirname, 'dist/usEnermyscss6/index.html'));
    res.send("rex homepage");
});
/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
