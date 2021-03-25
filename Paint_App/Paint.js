function init() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    //define the colour of the line
    ctx.strokeStyle = "black";
    
    //define the starting point of line1 (x1,y1)
    ctx.moveTo(200,200);
    
    //define the end point of line1 (x2,y2)
    ctx.lineTo(400,100);
    
    //define the end point of line2 (x3,y3)
    ctx.lineTo(300,100);
    
    //define the end point of line3 (x1,y1). We are back to where we started
    ctx.lineTo(200,200);
    
    //draw the points that makeup the triangle - (x1,y1) to (x2,y2), (x2,y2) to (x3,y3),  and (x3,y3) to (x1,y1)
    ctx.stroke();
    ctx.fillStyle = "turquoise";
    ctx.fill();
    }
    
    }

    function datareset(){  
        document.getElementById("canvas").reset();  
      }   