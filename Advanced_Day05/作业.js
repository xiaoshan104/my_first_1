/*
 作者：李振超    2017年5月17日 10:25
 面向对象分析：

 */
function BaseContent(div){
    this.div = div;
    this._init();
}
BaseContent.prototype = {
    _init: function (){
        if (!this.div) return;  //如果没有传递div过来，则后面的代码不需要执行

        var that = this;
        this.div.onclick = function (event){
            var children = event.currentTarget.children;
            var selectedP = event.target;
            console.log(selectedP);
            if (selectedP.tagName == "P"){
                that.selectedP = selectedP;
                //先把其他的都变成白色
                for (var i = 0; i < children.length; i++){
                    children[i].style.backgroundColor = "white";
                }
                selectedP.style.backgroundColor = "gray";
            }
        }
    },
    up: function (){
        //如果选中了p并且，这个p有上一个兄弟
        if (this.selectedP && this.selectedP.previousElementSibling){
            this.div.insertBefore(this.selectedP, this.selectedP.previousElementSibling);
        }
    },
    down: function (){
        if (this.selectedP && this.selectedP.nextElementSibling){
            this.div.insertBefore(this.selectedP, this.selectedP.nextElementSibling.nextElementSibling);
        }
    },
    first: function (){
        if (this.selectedP){
            this.div.insertBefore(this.selectedP, this.div.firstElementChild);
        }
    },
    last: function (){
        if (this.selectedP){
            this.div.appendChild(this.selectedP);
        }
    }
}

//---左边的开始
function LeftContent(div){
    BaseContent.call(this, div);
}
LeftContent.prototype = new BaseContent();

LeftContent.prototype.toRight = function (rightDiv){
    var p = this.selectedP;
    p.style.backgroundColor = "white";
    rightDiv.appendChild(p);
    delete this.selectedP;

}
LeftContent.prototype.all2Right = function (rightDiv){  // 4 four for   2 two to
    if (this.selectedP){
        this.selectedP.style.backgroundColor = "white";
        delete this.selectedP;
    }
    var ps = this.div.children;

    while(this.div.firstElementChild){
        rightDiv.appendChild(this.div.firstElementChild);
    }
}
//左边的结束

function RightContent(div){
    BaseContent.call(this, div);
}
RightContent.prototype = new BaseContent();
RightContent.prototype.toLeft = function (leftDiv){
    var p = this.selectedP;
    p.style.backgroundColor = 'white'
    leftDiv.appendChild(p);
    delete this.selectedP;

}
RightContent.prototype.all2Left = function (leftDiv){  // 4 four for   2 two to
    if(this.selectedP){
        this.selectedP.style.backgroundColor = "white"
        delete this.selectedP;
    }
    var ps = this.div.children;

    while(this.div.firstElementChild){
        leftDiv.appendChild(this.div.firstElementChild);
    }

}