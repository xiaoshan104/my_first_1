//在node中，只要把代码写在文件中，则文件中的所有变量都是私有的，
//即使没有定义函数内部。package == 模块
var a = 10;

console.log(global.a);
