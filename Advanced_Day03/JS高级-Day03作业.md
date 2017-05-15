
```
1、有农民(farmer),教师(teacher),科学家(scientist),服务生(attendant) 
   a: 其中农民,服务生只有基本工资.  
   b: 教师除基本工资外,还有课酬(元/天)  
   c: 科学家除基本工资外,还有年终奖 
   D: 使用原型继承的方式完成时上面的功能。
   
2、完成如下功能 
   a: 设计构造函数表示二维平面的点Point。  应该有属性 x，y坐标。提供一个可以计算两个点距离的方法。
        function Point(x, y){
            this.x = x;
            this.y = y;
        }
        Point.prototype.caculateDistance = function(otherPoint){
            // this一个点   otherPoint也是一个点
            
        
        }
        var p1 = new Point(10, 20);
        var p2 = new Point(20, 30);
        p1.cacu...(p2)
        
        p2.cacu...(p1)
   b: 设计构造函数表示二维的圆Circle，提供周长和面积
        
   c: 设计构造函数表示圆柱体Cylinder，提供体积的功能
        
   d: 分别使用原型继承和构造函数借调的方式来完成继承。

3. 整理这三天的知识点，写一篇高质量的帖子。
```