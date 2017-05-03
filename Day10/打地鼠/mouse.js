/**
 * Created by lzc on 2017/5/3.
 */
var container = document.getElementById("container");
var btn = document.getElementById("btn");
var id;
var score = 0;  //记录分数
var scoreDiv = document.getElementById("score");

//开始按钮的点击事件
btn.onclick = function (){
    container.innerHTML = "";
    scoreDiv.innerHTML = score;
    clearTimeout(id);
    id = setTimeout(function step(){
        createMouse(container);
        //如果游戏要结束，就用再开启下一个定时器了。
        if (judgeGameOver()){
            container.innerHTML = "<img src='end.png' class='end'>"
            score = 0;
            return;
        }
        id = setTimeout(step, 600)
    }, 0)
}
/**
 * 创建一个地鼠：
 * 地鼠用img来显示，创建成功之后把img添加到指定的父容器中
 * @param parent
 */
function createMouse(parent){
    var img = document.createElement("img");
    img.src = "./mouse.png";  //给img显示的图片的地址
    img.style.left = randomInt(0, parent.offsetWidth - 100) + "px";
    img.style.top = randomInt(0, parent.offsetHeight - 100) + "px";
    img.onclick = function (){
        parent.removeChild(img);
        score += 100;
        scoreDiv.innerHTML = score;
    }
    parent.appendChild(img);
}
/**
 * 决定是否要结束游戏
 * @returns {boolean} true表示结束游戏
 */
function judgeGameOver(){
    if (container.childElementCount >= 10){
        return true;
    }
    return false;
}
/**
 作者:李振超      2017年5月3日 16:50
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
