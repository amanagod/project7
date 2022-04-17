Var a = document.querySelectorAll(".drum").length;
var i;
for(i=0; i<=a;i++){
 var b = document.querySelectorAll(".drum")[i];
b.addEventListener("click",function (){
var value=this.innerHTML;
sound(value);
animation(value);
});
}

function sound(value){
switch(value){
case "w":
var w= new Audio("crash.png");
w.play();
break;

case "a":
var a= new Audio("kick.png");
a.play();
break;

case "s":
var s= new Audio("snare.png");
s.play();
break;

case "d":
var d= new Audio("tom1.png");
d.play();
break;

case "j":
var j= new Audio("tom2.png");
 j.play();
break;

case "k":
var k = new Audio("tom3.png");
 k.play();
break;

case "l":
var l= new Audio("tom4.png");
l.play();
break;

}
}
