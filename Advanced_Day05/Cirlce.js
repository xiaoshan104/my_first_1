function Circle(parent){
    this.parent = parent;
    this.div = document.createElement("div");
    this.r = randomInt(20, 100);
    this.color = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${Math.random() * 0.5 + 0.5})`;
    this.left = randomInt(0, 1200);
    this.top = randomInt(0, 600);
    this.speedX = randomInt(-10, 10);
    this.speedX = Math.abs(this.speedX) < 4 ? 5 : this.speedX;
    this.speedY = randomInt(-10, 10);
    this.speedY = Math.abs(this.speedY) < 4 ? 5 : this.speedY;
}
Circle.prototype = {
    drawCircle : function (){
        var div = this.div;
        var s = div.style;
        s.width = this.r * 2 + "px";
        s.height = this.r * 2 + "px";
        s.backgroundColor = this.color;
        s.left = this.left + "px";
        s.top = this.top + "px";
        this.parent.appendChild(div);
    },
    run : function (){
        var that = this;
        var div = this.div;
        var maxLeft = this.parent.offsetWidth - div.offsetWidth;
        var maxTop = this.parent.offsetHeight - div.offsetHeight;
        console.log(maxTop);
        setInterval(function (){
            var left = div.offsetLeft + that.speedX;
            var top = div.offsetTop + that.speedY;
            if(left <= 0){
                left = 0;
                that.speedX *= -1;
            }
            if(top <= 0){
                top = 0;
                that.speedY *= -1;
            }
            if(left >= maxLeft){
                left = maxLeft;
                that.speedX *= -1;
            }
            if(top >= maxTop){
                top = maxTop;
                that.speedY *= -1;
            }

            div.style.left = left + "px";
            div.style.top = top + "px";
        }, 20)
    }
}

/**
 作者:李振超      2017年5月17日 09:27
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to) {
    return parseInt(Math.random() * (to - from + 1) + from);
}

