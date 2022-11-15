class Nucleus {
    constructor (x, y, radius, color, velocity, orbitRadius, radian){
        this.x = x;
        this.y = y;
        this.startingPos = {x, y} // make new position 
        this.radian = radian;//0; // with new radian will change x and y to make it move in circle 
        this.radius = radius;  //how big electron will be 
        this.color = color;
        this.velocity = velocity;
        this.orbitRadius = orbitRadius;

    }
    //draw ()
    //update()
    //animate
        //update
        //draw
}


function drawNucleus(ctx){
    ctx.beginPath();
    ctx.arc(300, 300, 15, Math.PI * 2, false);
    ctx.fillStyle = "#8A99C7";//hex
    ctx.fill()
    ctx.closePath();
}

module.exports = Nucleus; 