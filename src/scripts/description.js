class Description {
    constructor(data){
        this.data = data;
        this.init();
    }

    init(){
        this.atomicMass();
        this.name();
        this.electronConfiguration();
        this.electroneg();
        this.iEnergy();
        this.density();
        this.boiling();
        this.melting();
    }

    name(){
        const name = document.querySelector("#name");
        name.innerHTML = this.data[0].name;
    }

    atomicMass(){
        const mass = document.querySelector("#atomic-mass");
        
        if (Array.isArray(this.data[0].atomicMass)){
            mass.innerHTML = `${this.data[0].atomicMass[0]} amu`; 
        }else {
            let end = this.data[0].atomicMass.length-3;
            mass.innerHTML = `${this.data[0].atomicMass.slice(0,end)} amu`;
        }
    }

    electronConfiguration(){
        const eConfig = document.querySelector("#e-config");
        eConfig.innerHTML = this.data[0].electronicConfiguration;
    }

    electroneg(){
        const eNeg = document.querySelector("#e-neg");
        eNeg.innerHTML = this.data[0].electronegativity;
    }

    iEnergy(){
        const energy = document.querySelector("#energy");
        if (this.data[0].ionizationEnergy === "unknown") {
            energy.innerHTML = `${this.data[0].ionizationEnergy}`
        } else {
            energy.innerHTML = `${this.data[0].ionizationEnergy}  KJ/mol`
        }
    }

    density(){
        const density = document.querySelector("#density");
        density.innerHTML = this.data[0].density;
    }

    boiling(){
        const boiling = document.querySelector("#boiling-point");
         if (this.data[0].boilingPoint === "unknown") {
            boiling.innerHTML = `${this.data[0].boilingPoint}`
        } else {
            boiling.innerHTML = `${this.data[0].boilingPoint}°C`
        }
    }

    melting(){
        const melting = document.querySelector("#melting-point");
        if (this.data[0].meltingPoint === "unknown") {
            melting.innerHTML = `${this.data[0].meltingPoint}`
        } else {
            melting.innerHTML = `${this.data[0].meltingPoint}°C`
        }
    }

}
module.exports = Description;