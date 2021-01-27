
var mouse_event =[];

canvas = document.getElementById("Canvas_1");
ctx=canvas.context("2d"); 

 var color = green;
 
var radius = 3;
 var width = 2;
 var last_x,last_y;


 canvas.addEventListener("mousedown", mousedown_function);

 function mousedown_function(e){

    color =document.getElementById("color").value;
    width =document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouse_event = "mousedown";
 }

 canvas.addEventListener("mousemove", mousemove_function);

 function mousemove_function(e){

    current_x =e.client.x -canvas.offsetLeft;
    current_y=e.client_y -canvas.offsetTop;
    
    mouse_event = "mousemove";
 }

 if( mouse_event == "mousedown" ){


    console.log("Current Position Of x & y Cordinates");
    console.log("X ="+ current_x +"y =" + current_y);

    ctx.beginpath();
    ctx.strokeStyle =color;
    ctx.lineWidth = width;
    ctx.arc(current_x,current_y,radius,0,2*Math.PI);
    ctx.stroke();
 }