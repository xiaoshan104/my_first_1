(function ($, window, document){
    //这种方法添加的插件，直接添加到了原型对象上，所以jquery查找到的对象可以直接使用
    $.fn.foo = function (){
        console.log("这个是我们自定义的插件....");
    }
})(jQuery, window, document, undefined);  //传递这些常用对象进去，可以提供变量的查找速度
