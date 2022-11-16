class Description {
    constructor(data){
        this.data = data;
        this.init();
    }

    init(){
        this.atomicMass();
        this.name();
        this.electronConfiguration();
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