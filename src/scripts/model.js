// const Electron = require("./scripts/electron.js");
// const Orbit = require("./scripts/orbit.js");
// const Nucleus = require("./scripts/nucleus.js");

class Model{
    constructor(ctx,data){
        this.ctx = ctx;
        this.data = data;
        this.electrons = [];
        this.shell = this.getShells();
    }

    getShells(){
        const nobleGases = {
            "[He]": ['1s2'], 
            "[Ne]": ['1s2', '2s2', '2p6'], 
            "[Ar]": ['1s2', '2s2', '2p6', '3s2', '3p6'],
            "[Kr]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6'],
            "[Xe]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6'],
            "[Rn]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6', '4f14', '5d10', '6s2', '6p6'], 
            "[Og]": ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '5s2', '5p6', '4f14', '5d10', '6s2', '6p6', '5f14', '6d10', '7s2', '7p6']
        };
        
        let electronConfiguration = this.data[0].electronicConfiguration.split(" ");
        
        if(Object.keys(nobleGases).includes(electronConfiguration[0])){
            let nobleGas = electronConfiguration.shift();
            electronConfiguration =  nobleGases[nobleGas].concat(electronConfiguration)
        };

        const count = {}
        electronConfiguration.forEach( (el) => {
            if(!count[el[0]]) count[el[0]] = 0;
            count[el[0]] += parseInt(el.slice(2));
        });

        return Object.values(count);
       
    }


    init(){

    }
}
module.exports = Model;




// drawNucleus(ctx); 
// shells.forEach( (numElectrons, shellNum) => {
   
//     drawOrbits(ctx, shellNum + 1);
//     for (let i = 0 ; i < numElectrons; i++){
//         drawElectron(ctx,shellNum + 1)//new Electron (x, )pushing into this.electrons
//         // new Nucleus, 
//         // new Orbits
//     }

// });

//animate for this model. Nucles.draw()nucleus draw orbits Electron.animate invoke request animation framepassing thru models animation function







// function getRandomArbitrary(min, max) {
// return Math.random() * (max - min) + min;
// }
