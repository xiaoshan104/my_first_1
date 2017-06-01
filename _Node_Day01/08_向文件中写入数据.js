var fs = require("fs");
var msg = "这个是个通过代码写入的信息";
fs.writeFile("test.txt", msg, "utf-8",function (err){ //回调是当文件写完成之后的回调
    if (err){
        console.log("文件写入失败");
    }else{
        console.log('文件写入成功');
    }
});