function Animator(durations, easings, doSomethings){
    this.durations = durations;
    this.easings = easings;
    this.doSomethings = doSomethings;
}
Animator.prototype = {
    start(){
        var durations = this.durations,
            easings = this.easings,
            doSomethings = this.doSomethings,
            startTime = new Date(),
            p,
            currentIndex = 0,  //表示正在执行的动画的index
            counts = durations.length;  //表示要执行的动画序列的个数
        requestAnimationFrame(function step(){
            var duration = durations[currentIndex];
            var easing = easings[currentIndex];
            var doSomething = doSomethings[currentIndex];
            p = Math.min(1, (new Date() - startTime) / duration);
            doSomething(easing(p));
            if(p == 1){  //表示一个动画执行结束了
                if(currentIndex == counts - 1){
                    return;
                }else{
                    currentIndex++;
                    startTime = new Date();
                }
            }
            requestAnimationFrame(step);
        });
    },
    stop(){

    }
}
