class Electron {
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

function drawElectron(ctx,shellNum){
    let initradian = getRandomArbitrary(0, 6.283);
    let radius = 40 * shellNum
    let x =  300+ Math.sin(initradian) * radius; 
    let y = 300 +Math.cos(initradian) * radius; 
    ctx.beginPath();
    ctx.arc(x, y, 5, Math.PI * 2, false);
    ctx.fillStyle = "rgba(0, 0, 0)";
    ctx.fill()
    ctx.closePath();
}

module.exports = Electron; 