const express = require('express')
const app = express()
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware
app.use(logger('dev')); // log requests in server console
app.use(bodyParser.json()); // parse client request data to json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

//router setup
const index = require('./routes/index');
const students = require('./routes/students');
const chat = require('./routes/chat');

app.use('/', index);
app.use('/students', students);
app.use('/chat', chat);

// connect mongoDB
mongoose.connect('mongodb://localhost:27017/webdxd', { useMongoClient:true });
mongoose.Promise = global.Promise

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err =  new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * socket.io config.
 */
const io = require('socket.io')(server);

require('./socket')(io);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
});
