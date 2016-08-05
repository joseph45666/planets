

var canvas = document.getElementById("graphics");
    var ctx = canvas.getContext("2d");
    //canvas.style.background="#000000";
function rotation(){

}
var sunSize = 100;
function sun(){
    var centerx= canvas.width/2;
    var centery= canvas.height/2;
   circle(centerx,centery,sunSize,document.getElementById("sunI"));
   
}


    var intervalID = window.setInterval(draw, 33)

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    sun();
    earth();
    saturn();
    mercury();
    uranus();
    jupiter();
    moon();
    mars();
    venus();
   /*moon();
    venus();
    earth();
    mars();
    jupiter();
    neptune();
    */
}
Math.radians = function(degrees){
    return degrees*Math.PI/180;
}
var marsPosition = 0;
function mars(){
    marsPosition++;
    var radius = 200;
   var x = radius * Math.cos(Math.radians(marsPosition));
   var y = radius * Math.sin(Math.radians(marsPosition))
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-50,document.getElementById('marsI'))
    ctx.restore();
}
var satuPosition= 20;
function saturn(){
     satuPosition= satuPosition+1;
    var radius = 255;
   var x = radius * Math.cos(Math.radians(satuPosition));
   var y = radius * Math.sin(Math.radians(satuPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    //circle(x,y,sunSize-45,document.getElementById("satI"));
    var image = document.getElementById("satI");
    var size = sunSize-50;
    if(image && image.src){
        ctx.drawImage(image,x-(size/2),y-(size/2),size+40,size);
    }
    ctx.restore();
}
var mercuryPosition = 140;
function mercury(){
    var radius =90;
    mercuryPosition++;
      var x = radius * Math.cos(Math.radians(mercuryPosition));
   var y = radius * Math.sin(Math.radians(mercuryPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-80,document.getElementById("merI"));
    ctx.restore();
}
var jupiPosition= 60;
function jupiter(){
     jupiPosition++;
    var radius = 210;
   var x = radius * Math.cos(Math.radians(jupiPosition));
   var y = radius * Math.sin(Math.radians(jupiPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-40,document.getElementById("jupiterI"));
    
    circle(x,y,45,"#ffa500");
    ctx.restore();
}
var earthPosition = 240;
function earth(){
    var radius =160;
    earthPosition++;
    var x = radius * Math.cos(Math.radians(earthPosition));
   var y = radius * Math.sin(Math.radians(earthPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-55,document.getElementById("imgE"));
    ctx.restore();
}

//moon
var moonPosition = 0;
function moon(){
  var radius =30;
     moonPosition--;
     var x = radius * Math.cos(Math.radians(moonPosition));
   var y = radius * Math.sin(Math.radians(moonPosition));
   var earthx = 160* Math.cos(Math.radians(earthPosition));
   
   var earthy = 160 * Math.sin(Math.radians(earthPosition));
   
   ctx.save();
   ctx.translate(earthx+canvas.width/2,earthy+canvas.height/2);
     circle(x,y,7,"#ffffff");
     ctx.restore();
     console.log(earthx);
   
}

var uraPosition= 110;
function uranus(){
    var radius =280;
uraPosition++;
    var x = radius * Math.cos(Math.radians(uraPosition));
   var y = radius * Math.sin(Math.radians(uraPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-55,document.getElementById("urI"));
    ctx.restore();
    circle();
}
var nepPosition= 140;
function neptune(){
    nepPosition++;
    var radius = 285;
   var x = radius * Math.cos(Math.radians(nepPosition));
   var y = radius * Math.sin(Math.radians(nepPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-42,"#3400ff");
    ctx.restore();
}
var venusPosition= 20;
function venus(){
    var radius =130;
    venusPosition++;
    var x = radius * Math.cos(Math.radians(venusPosition));
   var y = radius * Math.sin(Math.radians(venusPosition));
   ctx.save();
   ctx.translate(canvas.width/2,canvas.height/2);
    circle(x,y,sunSize-55,document.getElementById('venI'));
    ctx.restore();
}

function circle(xOffSet, yOffSet,size,image){
     var w =100;
    var h = w;

    if(image && image.src){
        ctx.drawImage(image,xOffSet-(size/2),yOffSet-(size/2),size,size);
    }
    /*ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.fillStyle= color;
    ctx.arc(xOffSet,yOffSet,size,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    */
}


