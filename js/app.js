var stop = document.getElementById("stop");
var wait = document.getElementById("wait");
var go = document.getElementById("go");
var c1 = document.getElementById("C1");
var c2 = document.getElementById("C2");
var c3 = document.getElementById("C3");
function clearlight(){
	c1.style.backgroundColor = "black";
	c2.style.backgroundColor = "black";
	c3.style.backgroundColor = "black";
}
function doStop(){
	clearlight();
	c1.style.backgroundColor = "red";
}
function doWait(){
	clearlight();
	c2.style.backgroundColor = "orange";
}
function getgo(){
	clearlight();
	c3.style.backgroundColor = "green";
}
stop.addEventListener("click", doStop, false);
wait.addEventListener("click", doWait, false);
go.addEventListener("click", getgo,false);



