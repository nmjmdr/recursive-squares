function square(ctx, x,y,w) {
ctx.rect(x-w/2, y-w/2, w, w);
ctx.stroke();
}

function getCorners(x,y,w) {
var corners = [];
  corners.push({x:x-w/2-w/4,y:y-w/2-w/4})
  corners.push({x:x+w/2+w/4,y:y-w/2-w/4})
  corners.push({x:x+w/2+w/4,y:y+w/2+w/4})
  corners.push({x:x-w/2-w/4,y:y+w/2+w/4})
  return corners
}

function draw(ctx,preCorners,d,w) {
var newCorners = []
  preCorners.forEach((preCorner)=>{
    corners = getCorners(preCorner.x,preCorner.y,w/d);
    newCorners.push(...corners)
    corners.forEach((corner)=>{
      square(ctx,corner.x,corner.y,w/(2*d));
    })
  })
  return newCorners
}

function drawPattern(start,multiplier,width) {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = c.height/2;
var y = c.width/2;

var w = width;
square(ctx,x,y,w)



var corners = getCorners(x,y,w);

corners.forEach((corner)=>{
square(ctx,corner.x,corner.y,w/2);
})

var d = start
while(d<20) {
corners = draw(ctx,corners,d,w)
d = d * multiplier
}
}
