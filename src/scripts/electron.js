class Electron {
    constructor (ctx, x, y, radius, color, velocity, orbitalRadius, radian){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        if (this.color === "FFFFFF") this.color = "000000";

        this.velocity = velocity;
        this.orbitalRadius = orbitalRadius;
        this.radian = radian; 
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
        this.x =  this.ctx.canvas.width/2 + (Math.sin(this.radian)*this.orbitalRadius);
        this.y = this.ctx.canvas.height/2 + (Math.cos(this.radian)*this.orbitalRadius);
       
    }
    
    //update and draw in animate
    animate(){
        this.update();
        this.draw();
    }
}

module.exports = Electron; 