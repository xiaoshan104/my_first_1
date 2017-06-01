/**
 * Created by lzc on 31/05/2017.
 */
/*导入一个新的模块，在当前文件中可以使用这个模块*/
var events = require("events");
var emitter = new events.EventEmitter();  //创建一个事件发射器。 可以出发事件，也可以去监听事件
//监听事件 my1
emitter.on("my1", function (){
    console.log("发生了my1 事件");
})
//监听事件 my2
emitter.on("my2", function (a, b){
    console.log("发生了my2 事件", a, b);
})

process.stdin.on("data", function (msg){
    var t1 = msg.toString();
    var t2 = t1.slice(0, t1.length - 1);
    emitter.emit(t2, 10, 20, 30);
});

