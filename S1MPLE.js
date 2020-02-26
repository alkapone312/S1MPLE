//create vector structure
class Vector{
constructor(x, y, z)
{
this.x = x;
this.y = y;
this.z = z;
}
}

//variable for canvasContext
var ctx;

//creating canvas and setting up ctx variable
function createCanvas(width, height)
{
//create canvas
var canvas = document.createElement('canvas');
canvas.width = "350";
canvas.height = "350";
canvas.style.backgroundColor = "white";
document.body.appendChild(canvas);
ctx = canvas.getContext('2d');
return canvas;
}

//setting up stroke color
function strokeStyle(style)
{
ctx.strokeStyle = style;
}

//setting up fill color
function fillStyle(style)
{
ctx.fillStyle = style;
}

//drawing line
function line(x,y,x2,y2)
{
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x2,y2);
}

//allows stroke
function stroke()
{
	ctx.stroke();
}

//allows fill
function fill()
{
	ctx.fill();
}

//drawing circle
function circle(x,y,r)
{
ctx.beginPath();
ctx.arc(x,y,r,0,2*Math.PI);
}

//sets origin of the drawing
function setOrigin(x,y)
{
ctx.translate(x,y);
}

function sin(x)
{
return Math.sin(x*3.14/180);
}

