//输出文本
var pi,person,answer;
pi = 1.8;
person = {
    firstName : "Bill",
    lastName : "Gates",
    age : 62,
    address : "New York",
    fullPara :function(){
        return this.firstName + " " + this.lastName + " is " + this.age + " years old. "
    }
};//对象属性
answer = "Where are you from ?";
document.getElementById("demo1").innerHTML=
    person.fullPara() + "<br>" + answer + "<br>" + "I'm from" + " " + person.address;

//数组类型
var teams = ["Nets", "Bulls", "Lakers","Bucks","76ers"];
document.getElementById("demo2").innerHTML= teams[4] ;

//JS函数
document.getElementById("demo3").innerHTML = "温度是： " + tofahrenheit(14) + " 华氏度。 ";
function tofahrenheit(Celsius){
    return (Celsius*pi) + 32;
}

//JS对象
var car = {type:"porsche",model:"911",color:"red"};
document.getElementById("demo4").innerHTML = car.model;

//字符串长度
var txt = "中国是瓷器的故乡,因此china与\"China(中国)\"同名。";//\"转义为"
var pos = txt.search("China");

//var pos = txt.indexOf("China");//首次出现的索引

document.getElementById("demo5").innerHTML = "字符串长度是：" + txt.length;
document.getElementById("demo6").innerHTML = "China首次出现的位置是:" + pos + "行";

//浮点数
/*var x = 0.2 + 0.1;
document.getElementById("demo7").innerHTML = "0.2 + 0.1 = " + x;
浮点精度17位*/

var x;
x = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo7").innerHTML = "0.2 + 0.1 = " + x;

//确定某个值是否是数：true,x不是数;false,x是数
var x = 100 / "Apple";
document.getElementById("demo8").innerHTML = isNaN(x);
//document.getElementById("demo8").innerHTML = typeof x;//返回x的类型：number

//最大范围返回值
var myNumber = 100;
var number = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    number = number + myNumber + "<br>";
}
document.getElementById("demo9").innerHTML = number;
