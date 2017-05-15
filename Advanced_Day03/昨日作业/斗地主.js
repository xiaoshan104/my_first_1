/*
 作者：李振超    2017年5月15日 08:28
 对象分析：
 1. 游戏本身 就是一个对象
 玩家  数组
 扑克牌

 开始游戏
 初始化游戏
 2. 玩家也是一个对象
 玩家名字  string
 玩家手里的牌  []

 3.  扑克牌
 所有的牌   []

 洗牌

 4.  每张牌
 花色
 点数



 */
var game = {
    players: [new Player("张飞"), new Player("吕布"), new Player("貂蝉")],
    poker: new Poker(),
    start: function (){
        this.poker.shuffle();
        //发牌
        this.sendCards()
        //显示每个人的牌
        this.showCards();

    },
    sendCards: function (){
        var cards = this.poker.cards;
        var players = this.players;
        for(var i = 0; i < cards.length - 3; i++){
            var card = cards[i];
            players[i % 3].cards.push(card);
        }
    },
    showCards: function (){
        var players = this.players;
        for(var i = 0; i < players.length; i++){
            var cards = players[i].cards;
            console.log(players[i].name + " : " + cards.join(","));
        }
    }

}
game.start();
function Player(name){
    this.name = name;
    this.cards = []
}

function Poker(){
    this.cardsCount = 54;
    this.cards = [];  //存储的一副扑克中所有的牌。
    this.shuffle = function (){  //表示这幅扑克的洗牌的功能
        //生成两张随机的下标，然后交换这两个下标对应的牌
        /*for (var i = 0; i < 100; i++){
            var index1 = randomInt(0, 53);
            var index2 = randomInt(0, 53);
            var temp = this.cards[index1]
            this.cards[index1] = this.cards[index2];
            this.cards[index2] = temp;
        }*/

        this.cards.sort(function (a, b){
            return Math.random() > 0.5 ? 1 : -1;
        })
    }
    var cards = this.cards;
    (function (){
        //把54张card进行初始化：添加54张牌
        var huases = ["♠", "♥", "♣", "♦"];
        var points = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (var huase of huases){
            for (var point of points){
                var card = new Card(huase, point);
                cards.push(card);
            }
        }
        cards.push(new Card("", "大王"))
        cards.push(new Card("", "小王"))
    })();

}

function Card(huase, point){
    this.huase = huase;
    this.point = point;
    this.toString = function (){
        return this.huase + this.point;
    }
}

/**
 作者:李振超      2017年5月15日 09:41
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
