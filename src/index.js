// import Example from "./scripts/example";

// // document.addEventListener("DOMContentLoaded", () => {
// //     const main = document.getElementById("main");
// //     new Example(main);
// // });

const Table = require("./scripts/table.js");

document.addEventListener("DOMContentLoaded", ()=>{

    const figure = document.querySelector("#periodic-table");
    new Table(figure);

});

