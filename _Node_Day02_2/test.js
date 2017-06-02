var promise = new Promise(function (resole, reject){
   setTimeout(function (){
        console.log("定时器到了")
       resole();
   }, 5000)
});
promise.then(function (){
    console.log("执行成功");
})
console.log("abc");