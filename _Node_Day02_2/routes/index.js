var express = require('express');
var router = express.Router();

/* GET home page. http://127.0.0.1:3000/page*/
router.get('/page', function(req, res, next) {
  //用模板引擎去渲染模板
  res.render('index', { title: '1702班', age : 50 });
});
router.get('/page1', function(req, res, next) {
  res.render('index', { title: '你好' });
});

module.exports = router;
