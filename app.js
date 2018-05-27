const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const roles = require('./routes/roles');

mongoose.connect(config.mongo);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`);
});

var app = express();

// view engine setup
// Uncomment when using views
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// Uncomment when using public dir

app.use('/', roles);

// catch 404 and forward to error handler
app.use(function(_, _, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Sorry, No Such Endpoint');
});

module.exports = app;
