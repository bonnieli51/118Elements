import { all_elements } from "../data/index.js";

const Table = require("./scripts/table.js");
const Model = require("./scripts/model.js");
const Description = require("./scripts/description.js");

document.addEventListener("DOMContentLoaded", () => {
  // console.log(all_elements[0].atomicNumber);
  const figure = document.querySelector("#periodic-table");

  new Table(figure);
  figure.addEventListener("click", function (event) {
    var c = document.getElementById("bohr-model");
    c.width = 450;
    c.height = 450;
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    let cell = event.target;
    let number = cell.querySelector(".atomicNum").innerText;

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://periodic-table-elements-info.herokuapp.com/element/atomicNumber/${number}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        new Model(ctx, data);
        new Description(data);
      })
      .catch((error) => console.log("error", error));

    var modal = document.getElementById("my-modal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
});
