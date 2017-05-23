function ElectricFan(option){
    this._init(option);
}
ElectricFan.prototype = {
    _init(option){
        this.img = option.img;
        this.openBtn = option.openBtn;
        this.one = option.one;
        this.two = option.two;
        this.three = option.three;
        this.closeBtn = option.closeBtn;

        var that = this;
        this.openBtn.onclick = function (){
            that.open();
        }

        this.closeBtn.onclick = function (){
            that.close();
        }
        this.one.onclick = function (){
            that.changeSpeed(1);
        }
        this.two.onclick = function (){
            that.changeSpeed(2);
        }
        this.three.onclick = function (){
            that.changeSpeed(4);
        }

    },
    open(){
        if (this.running) return;
        this.running = true;
        var that = this;
        this.animator = new Animator({
            duration: 2000,
            easing: Easing.linear,
            doSomething(ease){
                that.img.style.transform = `rotateZ(${360 * ease}deg)`;
            }
        });
        this.animator.start(true);
    },
    close(){
        if(!this.animator) return;
        this.animator.stop();
        this.running = false;
    },
    changeSpeed(speedNum){
        if(!this.animator) return;
        this.animator.duration = 2000 / speedNum;
    }
}
