var http = require("http");
var url = require("url");
//创建一个服务器
var server = http.createServer();
var count = 1;
//使用server监听 request （请求）事件.
//回调函数的参数1：request 。参数：response
server.on("request", function (req, res){
    console.log(url.parse(req.url).query);
    //告诉浏览器，我发给你的东西是什么编码
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    //给浏览器响应数据
    res.write(`<h1>你是本网站的第${count++}</h1>`);
    res.end();
});
server.listen(8888);
//express