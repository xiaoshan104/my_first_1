/**
 * Created by lzc on 31/05/2017.
 */
var fs = require("fs");
fs.readFile("03_猜数字.js", "utf-8", function (err, data){
    if(!err){
        fs.writeFile("copy.js", data, "utf-8", function (err){
            if(err){
                console.log("复制失败");
            }else{
                console.log("复制成功");
            }
        })
    }else{
        console.log("读取失败");
    }
})