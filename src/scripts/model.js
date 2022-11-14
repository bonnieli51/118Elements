
function Model(ctx,data){

    const nobleGases = {
    "[He]": ['1s2'], 
    "[Ne]": ['1s2', '2s2', '2p6'], 
    "[Ar]": ['1s2', '2s2', '2p6', '3s2', '3p6'],
    "[Kr]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6'],
    "[Xe]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6'],
    "[Rn]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6', '4f14', '5d10', '6s2', '6p6'], 
    "[Og]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6', '4f14', '5d10', '6s2', '6p6', '5f14', '6d10', '7s2', '7p6']
    }

    let electronConfiguration = data[0].electronicConfiguration.split(" ");
    // console.log(electronConfiguration)

   if(Object.keys(nobleGases).includes(electronConfiguration[0])){
        let nobleGas = electronConfiguration.shift();
        electronConfiguration =  nobleGases[nobleGas].concat(electronConfiguration)
        // console.log(electronConfiguration)
   }

const count = {}
electronConfiguration.forEach( (el) => {
    // console.log(el[0]);
    if(!count[el[0]]) count[el[0]] = 0;
    count[el[0]] += parseInt(el.slice(2));
})

    const shells = Object.values(count);
    console.log(shells)
    shells.forEach( (shellNum,i) => {

        draw(ctx,i + 1);
    });

    // shells.forEach( (numElectrons, shellNum) => {
    //     draw(numElectrons, shellNum + 1);
    // });
}

// function draw(numElectrons, shellNum){

//     let r = 50 * shellNum; 
//     let n = numElectrons;
//     // console.log(r, n) 



function draw(ctx, shellNum){
    //orbit
    console.log(shellNum)
  
    ctx.beginPath();
    ctx.linewidth = 2;
    ctx.arc(300, 300, 40 * shellNum, Math.PI * 2, false);
    ctx.strokeStyle = 'rgba(255, 255, 25,5, 0.35)';
    ctx.stroke();
    ctx.closePath();
 
    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke();
}

module.exports = Model;

