console.log("请输入信息:");
process.stdin.on("data", function(msg){
    console.log("你输入的信息是：" + msg);
});
