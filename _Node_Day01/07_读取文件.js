// fs模块
var fs = require("fs");
//异步的方式读取文件. err:如果读取文件发生错误，则err就是个错误对象，否则就是undefined
fs.readFile(__filename, "utf-8", function (err, data){ // node的回调函数：错误优先
    if(!err){
        console.log(data);
    }else{
        console.log("文件读取错误，请重试。。。。");
    }
});
console.log("abcccccc")