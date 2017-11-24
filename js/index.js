
//入口函数
window.onload = function () {



}


//封装标题 字闪出
function titleShow(ele,str) {
    //切割成一个数组。并定义一个新的字符串，为“”，设置一个索引值。
    var arr = str.split("");
    var newStr = "";
    var num = 0;
    var timer;
    //设置一个定时器，判断字符串或者数组的长度。
    clearInterval(timer);
    timer = setInterval(function () {
        if(arr[num] != undefined){
            //如果符合标准就把元素添加到字符串中，并把索引值自增。
            newStr += arr[num];
            num++;
            ele.find(".titleShow").val(newStr);
        }else{
            clearInterval(timer);
        }
    },200);
}