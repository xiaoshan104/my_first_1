(function ($, window, document){
    //直接修改元素的背景色
    $.fn.bg = function (bgColor){
        this.css("backgroundColor", bgColor);
        return this;
    }
    $.fn.color = function (color){
        this.css("color", color)
        return this;
    }
})(jQuery, window, document)