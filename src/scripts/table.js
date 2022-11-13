// const { findRelativeConfig } = require("@babel/core/lib/config/files");
// const { at } = require("core-js/core/string");



class Table{
    allElements

    constructor(ele){
        this.ele = ele;
        this.fetchData();
        // this.handleClick = this.handleClick.bind(this)
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

        for (let i = 0; i < this.allElements.length; i++){

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
     }

    //  handleClick(e){
    //     const el = e.target;
    //     if (el.classList.contains("element")){
    //         console.log("hi")
    //     }
    //  }
}    

module.exports = Table;