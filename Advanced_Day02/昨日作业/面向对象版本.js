/**
 * Created by lzc on 2017/5/12.
 */
/*
 对象分析：
 1. 对象应该有哪些属性
 三个select属性

 2. 对象应该有哪些方法
 fillPro
 fillciyt
 fillCounty
 */
var threeLevelChange = {
    init: function (){
        var that = this;
        //默认填充北京省....\
        this.fillProvince();
        this.fillCity(1);
        this.fillCounty(1);
        //给省和市两个select添加onchange事件
        this.proSelect.onchange = function (){
            var proId = that.proSelect.value;
            that.fillCity(proId);
            that.citySelect.onchange();
        };
        this.citySelect.onchange = function (){
            var cityId = that.citySelect.value;
            that.fillCounty(cityId);
        }
    },
    proSelect: document.getElementsByTagName("select")[0],
    citySelect: document.getElementsByTagName("select")[1],
    countySelect: document.getElementsByTagName("select")[2],
    fillProvince: function (){
        var ps = data.provinceList;
        for (var p of ps){
            this.createOption(p.ProID, p.ProName, this.proSelect);
        }
    },
    fillCity: function (proId){
        this.citySelect.innerHTML = "";
        var cs = data.cityList;
        for (var c of cs){
            if (c.ProID == proId){
                this.createOption(c.CityID, c.CityName, this.citySelect);
            }
        }
    },
    fillCounty: function (cityId){
        this.countySelect.innerHTML = "";
        var cs = data.countyList;
        for (var c of cs){
            if (c.CityID == cityId){
                this.createOption(c.id, c.DisName, this.countySelect);
            }
        }
    },
    createOption: function (value, text, select){
        var opt = document.createElement("option");
        opt.value = value;
        opt.innerHTML = text;
        select.appendChild(opt);
        return opt;
    }
}
threeLevelChange.init();
