class Electron {
    constructor (ctx, x, y, radius, color, velocity, orbitalRadius, radian){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        // this.startingPos = {x, y} // make new position 
        this.radius = radius;  //how big electron will be 
        this.color = color;
        this.velocity = velocity;
        this.orbitalRadius = orbitalRadius;
        this.radian = radian;  //with new radian will change x and y to make it move in circle 

    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = `#${this.color}`;
        this.ctx.fill()
        this.ctx.closePath();
    }
    update(){
        this.radian += this.velocity;
        this.x += (Math.sin(this.radian));
        this.y += (Math.cos(this.radian));
    }
    
    //update and draw in animate
    animate(){
        this.update();
        this.draw();
    }
}



module.exports = Electron; 