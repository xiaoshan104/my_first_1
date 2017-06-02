/**
 * Created by lzc on 02/06/2017.
 */
var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/data1', function(req, res, next) {
    //先获取到users.json中的数据
    fs.readFile("../data/users.json", "utf-8", function (err, data){
        //元数据
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        if(!err){
            res.send(data);
        }else{
            res.send(err);
        }
    })
});

module.exports = router;