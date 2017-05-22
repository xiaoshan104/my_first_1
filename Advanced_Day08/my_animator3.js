/*
 作者：李振超    2017年5月22日 14:44

 1、归一化的时间       需要：duration

 2. 把归一化的时间交给动画算子  需要：动画算子

 3、把需要做的动画封装到函数中传入。 需要：函数 doSomething( e )

 3. 动画的结束时机

 */
function Animator(option){
    this._init(option);
}
Animator.prototype = {
    _init: function (option){
        this.duration = option.duration;
        this.easing = option.easing;
        this.doSomething = option.doSomething;
    },
    start: function (isLoop){

        if (typeof this.duration != "number"
            || typeof this.easing != "function"
            || typeof this.doSomething != "function")   return;

        var duration = this.duration,
            easing = this.easing,
            doSomething = this.doSomething,
            startTime = new Date(),
            p;
        var that = this;
        this.animationId = requestAnimationFrame(function step(){
            p = Math.min(1, (new Date() - startTime) / duration);
            doSomething(easing(p));
            if (p == 1){
                if (isLoop){
                    startTime = new Date();
                }else{
                    return;
                }
            }
            that.animationId = requestAnimationFrame(step);
        });

    },
    stop: function (){
        console.log("a");
        cancelAnimationFrame(this.animationId);
    }
}
