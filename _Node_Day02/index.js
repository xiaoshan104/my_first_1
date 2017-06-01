//导入express
var express = require('express');
//获取一个app对象
var app = express();
//处理get请求   http://127.0.0.1:3000
app.get('/', function (req, res) {
    res.send('Hello World');
});
//http://127.0.0.1:3000/abc
app.get('/abc', function (req, res){
    res.send('Hello World  abc');
});
app.get('/page', function (req, res){
    res.send('这个是个新的网页');
});
app.listen(3000);
// router  路由