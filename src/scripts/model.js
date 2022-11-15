// const Electron = require("./scripts/electron.js");
// const Orbit = require("./scripts/orbit.js");
const Electron = require("./electron.js");
const Nucleus = require("./nucleus.js");
const Orbit = require("./orbit.js");

class Model{
    constructor(ctx,data){
        this.ctx = ctx;
        this.data = data;
        this.electrons = []; // electron objects wil be pushed into here
        this.shells = this.getShells();
        this.init();
        console.log(this.electrons);
        
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

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // make new objects here
    init(){
        const nucleus = new Nucleus(this.ctx, this.ctx.canvas.width/2, this.ctx.canvas.height/2, 15, this.data[0].cpkHexColor, 0);
        nucleus.draw();
      
        this.shells.forEach( (numElectrons, shellNum) => {
            let orbitalRadius = 40 * (shellNum+1);
            const orbit = new Orbit(this.ctx, this.ctx.canvas.width/2, this.ctx.canvas.height/2, orbitalRadius, this.data[0].cpkHexColor, 0);
            orbit.draw();
            
            for (let i = 0 ; i < numElectrons; i++){
                let radian = this. getRandomArbitrary(0, 6.283);
                this.electrons.push(new Electron(this.ctx, this.ctx.canvas.width/2 + Math.sin(radian) * orbitalRadius, this.ctx.canvas.width/2 + Math.cos(radian) * orbitalRadius, 5, this.data[0].cpkHexColor, 1, orbitalRadius, radian));
            }
            this.electrons.forEach( (electron) => {
                electron.draw();

            });
        })
    }
    
    // will call on objects.draw or electron.animate here
    animate(){


    }
}
module.exports = Model;





// });

// electron.animate invoke request animation framepassing thru models animation function








