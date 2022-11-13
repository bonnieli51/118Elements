// const { findRelativeConfig } = require("@babel/core/lib/config/files");
// const { at } = require("core-js/core/string");


let allElements = "";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'

  };
  
  fetch("https://periodic-table-elements-info.herokuapp.com/elements", requestOptions)
    .then(response => response.json())
    .then(result => allElements = result)
    .catch(error => console.log('error', error));

class Table{
    constructor(ele){
        this.ele = ele;
        this.setupTable();
    }

    setupTable(){

        for (let i = 0; i < allElements.length; i++){
            const div = document.createElement("div");

            div.classList.add("element");

            const atomicNum = document.createElement("div");        
            atomicNum.classList.add("atomicNum");
            atomicNum.innerHTML = allElements[i].atomicNumber; 

            const symbol = document.createElement("div");
            symbol.innerHTML = allElements[i].symbol;
            symbol.classList.add("symbol");

            const name = document.createElement("div");
            symbol.innerHTML = allElements[i].name
            name.classList.add("name");
            
            div.appendChild(atomicNum);
            div.appendChild(symbol);
            div.appendChild(name);
            this.ele.appendChild(div);
        };
     }
}    

export default Table;