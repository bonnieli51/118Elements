// import Example from "./scripts/example";

// // document.addEventListener("DOMContentLoaded", () => {
// //     const main = document.getElementById("main");
// //     new Example(main);
// // });

import Table from "./scripts/table";

document.addEventListener("DOMContentLoaded", ()=>{

    const figure = document.querySelector("#periodic-table");
    let table = new Table(figure);
});

