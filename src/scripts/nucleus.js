class Nucleus {
    constructor (ctx, x, y, radius, color, velocity){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius; 
        this.color = color;
        if (this.color === "FFFFFF") this.color = "000000";
        this.velocity = velocity;
    }
   
    draw(){ 
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y,this.radius, Math.PI * 2, false);
        this.ctx.fillStyle = `#${this.color}`;
        this.ctx.fill()
        this.ctx.closePath();
    }
}

module.exports = Nucleus; 