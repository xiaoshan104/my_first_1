/**
 * Created by lzc on 2017/4/30.
 */

var a = (function (){
    var a = [];
    function randomInt(from, to){
        return parseInt(Math.random() * (to - from + 1) + from);
    }
    for (var i = 0; i < 100000; i++){
        a.push(randomInt(0, 10000000))
    }
    return a;
})();

/**
 * 插入排序
 */
function insertionSort(a, lo, hi){
    // var date = new Date();
    for (var i = lo; i <= hi; i++){
        var temp = a[i];
        for (var j = i - 1; j >= 0 && a[j] > temp; j--){
            a[j + 1] = a[j];
        }
        a[j + 1] = temp;
    }
    // console.log("插入排序的时间：" + (new Date() - date) + "  " + lo + "  " + hi);
}
/**
 * 希尔排序
 */
function shellSort(){
    var date = Date.now();
    for (var gap = a.length >> 1; gap > 0; gap >>= 1){
        for (var i = gap; i < a.length; i++){
            var temp = a[i];
            for (var j = i - gap; j >= 0 && a[j] > temp; j -= gap){
                a[j + gap] = a[j];
            }
            a[j + gap] = temp;
        }
    }
    console.log("希尔排序的时间：" + (new Date() - date));
}
/**
 * 归并
 * @param a
 * @param b
 * @param lo
 * @param mid
 * @param hi
 */
function merge(a, b, lo, mid, hi){
    //每次归并前，都需要先把a中的数据copy到b中。
    for (var i = 0; i < a.length; i++){
        b[i] = a[i];
    }
    var i = lo, j = mid + 1;
    for (var k = lo; k <= hi; k++){
        if (i > mid){
            a[k] = b[j++];
        }else if (j > hi){
            a[k] = b[i++];
        }else if (b[i] < b[j]){
            a[k] = b[i++];
        }else{
            a[k] = b[j++]
        }
    }
}
/**
 * 归并排序
 * @param a
 * @param temp
 * @param lo
 * @param hi
 */
function sort(a, temp, lo, hi){
    if (lo >= hi) return;
    var mid = (hi + lo) >> 1;
    sort(a, temp, lo, mid);  //左半部分排序
    sort(a, temp, mid + 1, hi);//右半部分排序
    merge(a, temp, lo, mid, hi);
}

/**
 * 快速排序
 */
function quickSort(a, lo, hi){
    // if (lo >= hi) return;
    if(hi - lo <= 15){
        insertionSort(a,lo,hi);
        return;
    }
    var j = quickPartition(a, lo, hi);
    quickSort(a, lo, j - 1);
    quickSort(a, j + 1, hi);
}
/**
 * 快速排序的切分
 * @param a
 * @param lo
 * @param hi
 */
function quickPartition(a, lo, hi){
    var i = lo, j = hi + 1;  //左右扫描指针
    var p = a[lo];  //切分元素
    for (; ;){
        //扫描左右,检查扫描是否结束，并交换元素
        while (a[++i] <= p){
            if (i == hi) break;

        }
        while (a[--j] >= p){
            if (j == lo) break;
        }
        //如果左指针超过了右指针则结束
        if (i >= j) break;
        //交换左右的元素
        exch(a, i, j);
    }
    //把a[lo]添加到指定的位置
    exch(a, lo, j);
    return j;
}
function exch(a, m, n){
    var temp = a[m];
    a[m] = a[n];
    a[n] = temp;
}

//--测试开始
// shellSort();
// insertionSort(a, 0, a.length - 1)

var date = new Date()
quickSort(a, 0, a.length - 1);
console.log("快速排序时间：" + (new Date() - date));
console.log(a.toString());

