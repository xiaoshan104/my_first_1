var ss = document.getElementsByTagName("select");
fillProvince();
fillCity(1);
fillCounty(1)

ss[0].onchange = function (){
    //填充选择的那个省份的所有城市
    var proId = ss[0].value;
    fillCity(proId);
    //手动触发一下市的onchange事件。  由于城市自动变化的时候，不会触发onchange
    ss[1].onchange();
}
ss[1].onchange = function (){
    var cityId = ss[1].value;
    fillCounty(cityId);
}


/**
 * 在第一个selet中填充所有的省份
 */
function fillProvince(){
    var ps = data.provinceList;
    for(var p of ps){
        createOption(p.ProID, p.ProName, ss[0]);
    }
}
/**
 * 填充指定省份的所有的市
 * @param proId
 */
function fillCity(proId){
    ss[1].innerHTML = "";
    var cs = data.cityList;
    for(var c of cs){
        if(c.ProID == proId){
            createOption(c.CityID, c.CityName, ss[1]);
        }
    }
}
function fillCounty(cityId){
    ss[2].innerHTML = "";
    var cs = data.countyList;
    for(var c of cs){
        if(c.CityID == cityId){
            createOption(c.id, c.DisName, ss[2]);
        }
    }
}

/**
 * 创建一个option,biang把他追加到指定的select中
 * @param value
 * @param text
 * @param select
 */
function createOption(value, text, select){
    var opt = document.createElement("option");
    opt.value = value;
    opt.innerHTML = text;
    select.appendChild(opt);
    return opt;
}