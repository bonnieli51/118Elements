// const { findRelativeConfig } = require("@babel/core/lib/config/files");
// const { at } = require("core-js/core/string");

// const { make } = require("core-js/core/object");



class Table{
    allElements

    constructor(ele){
        this.ele = ele;
        this.fetchData();
    }
    
    fetchData(){

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
  
        fetch("https://periodic-table-elements-info.herokuapp.com/elements", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.allElements = result
                this.setupTable();
            })
            .catch(error => console.log('error', error));

    }
    setupTable(){

        for (let i = 0; i < 18; i++){
            if (i === 0){
                this.makeElementdiv(0);
            } else if(i===17){
                this.makeElementdiv(1);
            }else {
                this.makeEmptycell();
            }
        };
       
        for (let i = 0; i < 18; i++){
            if (i === 0){
                this.makeElementdiv(2);
            } else if(i===1){
                this.makeElementdiv(3);
            } else if(i > 11){
                this.makeElementdiv(i-8);
            }else {
                this.makeEmptycell();
            }
        };

        for (let i = 0; i < 18; i++){
            if (i === 0){
                this.makeElementdiv(10);
            } else if(i===1){
                this.makeElementdiv(11);
            } else if(i > 11){
                this.makeElementdiv(i);
            }else {
                this.makeEmptycell();
            }
        };

        for (let i = 0; i < 36; i++){
                this.makeElementdiv(18+i);
        };

        for (let i = 0; i < 18; i++){
            if ([0,1].includes(i)){
                this.makeElementdiv(54+i);
            } else if(i > 2){
                this.makeElementdiv(68+i);
            } else {
                this.makeEmptycell();
            }
        };

        for (let i = 0; i < 18; i++){
            if ([0,1].includes(i)){
                this.makeElementdiv(86+i);
            } else if(i > 2){
                this.makeElementdiv(100+i);
            } else {
                this.makeEmptycell();
            }
        };

        for (let i = 0; i < 18; i++){
            if (i > 1 && i < 17){
                this.makeElementdiv(54+i);
            } else {
                this.makeEmptycell();
            }
        };

        for (let i = 0; i < 18; i++){
            if (i > 1 && i < 17){
                this.makeElementdiv(86+i);
            } else {
                this.makeEmptycell();
            }
        };
     }

     makeElementdiv(i){

        const div = document.createElement("div");
        div.classList.add("element");
        

        const atomicNum = document.createElement("div");        
        atomicNum.classList.add("atomicNum");
        atomicNum.innerHTML = this.allElements[i].atomicNumber; 

        const symbol = document.createElement("h2");
        symbol.innerHTML = this.allElements[i].symbol;
        symbol.classList.add("symbol");

        // const name = document.createElement("div");
        // symbol.innerHTML = this.allElements[i].name
        // name.classList.add("name");
        
        div.appendChild(atomicNum);
        div.appendChild(symbol);
        // div.appendChild(name);
        this.ele.appendChild(div);

    };
    makeEmptycell(){
        const div = document.createElement("div");
        div.classList.add("cell");
        this.ele.appendChild(div);
    }
}    

module.exports = Table;