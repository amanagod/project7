alert("hi sbsjhs");

var a = document.querySelectorAll(".drum").length;
for( var i=0; i<a;i++){
 var b = document.querySelectorAll(".drum")[i];
b.addEventListener("click",function (){
var value=this.innerHTML;
sound(value);
animation(value);
});
}

document.addEventListener("keydown",function(event){
 var element = event.key;
sound(element);
animation(element);
}
);

function sound(velue){
switch(velue){
case "w":
var w= new Audio('crash.mp3');
w.play();
break;

case "a":
var a= new Audio('kick-bass.mp3');
a.play();
break;

case "s":
var s= new Audio('snare.mp3');
s.play();
break;

case "d":
var d= new Audio('tom-1.mp3');
d.play();
break;

case "j":
var j= new Audio('tom-2.mp3');
 j.play();
break;

case "k":
var k = new Audio('tom-3.mp3');
 k.play();
break;

case "l":
var l= new Audio('tom-4.mp3');
l.play();
break;
}
}

function animation (class){
var ani= document.querySelector("."+class);
ani.classList.add("pressed");
setTimeout(function (){
ani.classList.remove("pressed");
},100);
}
