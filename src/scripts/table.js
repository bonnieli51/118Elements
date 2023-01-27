const { all_elements } = require("../../data");

class Table {
  allElements = all_elements;

  constructor(ele) {
    this.ele = ele;
    // this.fetchData();
    this.setupTable();
  }

  // fetchData() {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://periodic-table-elements-info.herokuapp.com/elements",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.allElements = result;
  //       this.setupTable();
  //     })
  //     .catch((error) => console.log("error", error));
  // }

  setupTable() {
    for (let i = 0; i < 18; i++) {
      if (i === 0) {
        this.makeElementdiv(0);
      } else if (i === 17) {
        this.makeElementdiv(1);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 18; i++) {
      if (i === 0) {
        this.makeElementdiv(2);
      } else if (i === 1) {
        this.makeElementdiv(3);
      } else if (i > 11) {
        this.makeElementdiv(i - 8);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 18; i++) {
      if (i === 0) {
        this.makeElementdiv(10);
      } else if (i === 1) {
        this.makeElementdiv(11);
      } else if (i > 11) {
        this.makeElementdiv(i);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 36; i++) {
      this.makeElementdiv(18 + i);
    }

    for (let i = 0; i < 18; i++) {
      if ([0, 1].includes(i)) {
        this.makeElementdiv(54 + i);
      } else if (i > 2) {
        this.makeElementdiv(68 + i);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 18; i++) {
      if ([0, 1].includes(i)) {
        this.makeElementdiv(86 + i);
      } else if (i > 2) {
        this.makeElementdiv(100 + i);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 18; i++) {
      if (i > 1 && i < 17) {
        this.makeElementdiv(54 + i);
      } else {
        this.makeEmptycell();
      }
    }

    for (let i = 0; i < 18; i++) {
      if (i > 1 && i < 17) {
        this.makeElementdiv(86 + i);
      } else {
        this.makeEmptycell();
      }
    }
  }

  makeElementdiv(i) {
    const colors = {
      "alkali metal": "#FACFCE",
      "alkaline earth metal": "#ECD8F2",
      halogen: "#A979D9",
      metal: "#B4A3D9",
      metalloid: "#FFD37E",
      nonmetal: "#CBE4FF",
      "noble gas": "#B9C2CC",
      "post-transition metal": "#dfcdc6",
      "transition metal": "#c2d8d3",
      lanthanoid: "#9FE89A",
      actinoid: "#9ED1FF",
    };

    const div = document.createElement("div");
    div.classList.add("element");
    div.style.backgroundColor = colors[this.allElements[i].groupBlock];

    const atomicNum = document.createElement("div");
    atomicNum.classList.add("atomicNum");
    atomicNum.innerHTML = this.allElements[i].atomicNumber;

    const symbol = document.createElement("h2");
    symbol.innerHTML = this.allElements[i].symbol;
    symbol.classList.add("symbol");

    div.appendChild(atomicNum);
    div.appendChild(symbol);
    this.ele.appendChild(div);
  }

  makeEmptycell() {
    const div = document.createElement("div");
    div.classList.add("cell");
    this.ele.appendChild(div);
  }
}

module.exports = Table;
