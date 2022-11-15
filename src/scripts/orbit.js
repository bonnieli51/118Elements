function drawOrbits(ctx, shellNum){
    ctx.beginPath();
    ctx.linewidth = 2;
    ctx.arc(300, 300, 40 * shellNum, Math.PI * 2, false);
    ctx.strokeStyle = 'rgba(255, 255, 25,5, 0.35)';
    ctx.stroke();
    ctx.closePath();
}

module.exports = Orbit; 