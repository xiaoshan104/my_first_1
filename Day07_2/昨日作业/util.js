/**
 * Created by lzc on 2017/4/27.
 */
/**
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to) {
    return parseInt(Math.random() * (to - from + 1) + from);
}
