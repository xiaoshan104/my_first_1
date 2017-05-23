var lunbo = {
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
    /*开始定义方法*/
    autoPlay(){
        this.toPotion();
    },
    toPotion(){
        var imgs = this.imgs;
        var imgsInfo = this.imgsInof;
        for (let i = 0; i < imgs.length; i++){
            let img = imgs[i];
            let imgInfo = imgsInfo[i];
            let w = img.offsetWidth;
            let h = img.offsetHeight;
            let l = img.offsetLeft;
            let t = img.offsetTop;
            new Animator({
                duration: 400,
                easing: Easing.linear,
                doSomething(ease){
                    var s = img.style;
                    // 原来的宽度 + (现在的宽度 - 原来的宽度) * ease
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
lunbo.autoPlay();
