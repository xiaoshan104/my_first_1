var express = require('express');
var fs = require("fs");
var path = require("path"); //处理本地文件的路径
var router = express.Router();

/* GET home page. */
router.get('/data1', function (req, res, next){

    var methodName = req.query.callback;
    methodName = methodName || "foo";

    var page = req.query.page;
    page = page || 1;
    page = page > 3 ? 1 : page;

    //先获取到users.json中的数据
    var filePath = path.join(__dirname, "../data/users" + page +".json");
    fs.readFile(filePath, "utf-8", function (err, data){

        //元数据
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        if (!err){
            res.send(methodName + "(" + data + ")");
        }else{
            res.send(err);
        }
    })
});

module.exports = router;