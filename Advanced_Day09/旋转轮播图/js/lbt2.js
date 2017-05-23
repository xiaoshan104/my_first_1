var lunbo = {
    div: document.getElementById("lunbotu"),
    imgs: document.querySelectorAll("#imgs li"), /*参与轮播的图片*/
    preAndNext: document.querySelectorAll("#prevAndNext li"), /*手动轮播的按钮*/
    imgsInof: [
        {
            left: 50,
            top: 0,
            width: 300,
            height: 200,
            opacity: 0.4,
            zIndex: 1
        }, {
            left: 0,
            top: 50,
            width: 500,
            height: 300,
            opacity: 0.7,
            zIndex: 2
        }, {
            left: 150,
            top: 100,
            width: 700,
            height: 350,
            opacity: 1,
            zIndex: 3
        }, {
            left: 500,
            top: 50,
            width: 500,
            height: 300,
            opacity: 0.7,
            zIndex: 2
        }, {
            left: 650,
            top: 0,
            width: 300,
            height: 200,
            opacity: 0.4,
            zIndex: 1
        },
    ],
    init(){
        var parent = this.preAndNext[0].parentNode;
        var that = this;
        this.div.onmouseenter = function (){
            //关闭自动轮播
            clearTimeout(that.timeoutId);
            new Animator({
                duration: 500,
                easing: Easing.linear,
                doSomething(ease){
                    parent.style.opacity = ease;
                }
            }).start();
        };
        this.div.onmouseleave = function (){
            that.autoPlay();
            new Animator({
                duration: 500,
                easing: Easing.linear,
                doSomething(ease){
                    parent.style.opacity = 1 - ease;
                }
            }).start();
        };
        this.preAndNext[1].onclick = function (){
            that.imgsInof.push(that.imgsInof.shift());
            that.toPotion();
        };
        this.preAndNext[0].onclick = function (){
            that.imgsInof.unshift(that.imgsInof.pop())
            that.toPotion();

        }

    },
    /*开始定义方法*/
    autoPlay(){
        var imgsInfo = this.imgsInof;
        var that = this;
        this.timeoutId = setTimeout(function step(){
            that.toPotion();
            imgsInfo.unshift(imgsInfo.pop())
            that.timeoutId = setTimeout(step, 2000)
        }, 200)

    },
    toPotion(){
        var imgs = this.imgs;
        var imgsInfo = this.imgsInof;
        for (let i = 0; i < imgs.length; i++){
            let img = imgs[i];
            let imgInfo = imgsInfo[i];
            let w = img.offsetWidth; //动画执行之前的宽度
            let h = img.offsetHeight;
            let l = img.offsetLeft;
            let t = img.offsetTop;
            new Animator({
                duration: 600,
                easing: Easing.easeOut,
                doSomething(ease){
                    var s = img.style;
                    // 目标宽度 = 原来的宽度 + (目标宽度 - 原来的宽度) * ease
                    // 让变化量通过动画的方式去改变
                    s.width = w + (imgInfo.width - w) * ease + "px";
                    s.height = h + (imgInfo.height - h) * ease + "px";
                    s.left = l + ( imgInfo.left - l) * ease + "px";
                    s.top = t + (imgInfo.top - t) * ease + "px";
                    s.opacity = imgInfo.opacity;
                    s.zIndex = imgInfo.zIndex;
                }
            }).start(false);
        }
    }
}
lunbo.init();
lunbo.autoPlay();
