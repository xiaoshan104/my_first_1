(function ($, window, document){
    var plugin = {
        bg: function (bgColor){
            this.css("backgroundColor", bgColor);
            return this;
        },
        color: function (color){
            this.css("color", color)
            return this;
        }
    };
    var p2 = {
        foo : function (){
            console.log("foo....");
        }
    }
    /*$.fn.extend(plugin);
    $.fn.extend(p2);*/
    $.fn.extend($.extend({}, plugin, p2))
})(jQuery, window, document)