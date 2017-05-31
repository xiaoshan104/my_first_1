/*
 * 心理想一个数：
 *      随机成一个 0-100的整数
 *
 *  猜数：
 *      从键盘输入
 */

var num = randomInt(0, 100);
console.log("请猜一个 0 -- 100 的整数:", num);
process.stdin.on("data", function (n){  //n 用户猜的数字
    if(n > num){
        console.log("你猜大了");
    }else if(n == num){
        console.log("你猜对了");
        process.exit();  //退出node进程
        num = randomInt(0, 100);
    }else{
        console.log("你猜小");
    }
});



function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
    
