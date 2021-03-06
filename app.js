var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// router to pictures, js and css files
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));

app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/donwload', indexRouter);
app.use('/team', indexRouter);
app.use('/roadmap', indexRouter);
app.use('/markets', indexRouter);
app.use('/insentives', indexRouter);
app.use('/partners', indexRouter);
app.use('/rewards', indexRouter);
app.use('/contact', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
