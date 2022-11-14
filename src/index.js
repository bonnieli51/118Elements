// import Example from "./scripts/example";

// // document.addEventListener("DOMContentLoaded", () => {
// //     const main = document.getElementById("main");
// //     new Example(main);
// // });

const Table = require("./scripts/table.js");
const Model = require("./scripts/model.js");

document.addEventListener("DOMContentLoaded", ()=>{

    const figure = document.querySelector("#periodic-table");
    new Table(figure);
    figure.addEventListener('click', function(event){
        let cell = event.target;
        let number = cell.querySelector(".atomicNum").innerText;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://periodic-table-elements-info.herokuapp.com/element/atomicNumber/${number}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                new Model(data);
            })
            .catch(error => console.log('error', error));
    });
});

