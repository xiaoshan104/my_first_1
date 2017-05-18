ajax = {
    /*使用get方法区进行ajax请求*/
    get: function (option){
        if (!option.url) return; //
        if (typeof option.onSuccess != "function") return;

        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
        xhr.open("GET", option.url, true);
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    option.onSuccess(xhr.responseText);
                }else{
                    if (typeof option.onFail == "function"){
                        option.onFail(xhr.responseText);
                    }
                }
            }
        }
        xhr.send(null);
    },
    /*使用post方式进行ajax请求*/
    post: function (){

    }
}
