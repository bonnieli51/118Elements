class Orbital{
    constructor(ctx, x, y, radius, color, velocity) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.linewidth = 2;
        this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

module.exports = Orbital; 