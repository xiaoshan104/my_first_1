//导入express模块
var express = require('express');
var app = express();

//导入path：  处理路径相关的
var path = require('path');
var favicon = require('serve-favicon');
//处理日志
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// view engine setup  视图引擎
app.set('views', path.join(__dirname, 'views'));//视图放的路径  ....../_Node_Day02_2/views
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//设置静态代码所在的努力
app.use(express.static(path.join(__dirname, 'public')));

//重要：导入路由 index
var index = require('./routes/index');
//导入 路由users
var users = require('./routes/users');
app.use('/abc', index);
app.use('/users', users);

var login = require("./routes/login");
app.use("/login", login);

// catch 404 and forward to error handler
app.use(function (req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next){
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
