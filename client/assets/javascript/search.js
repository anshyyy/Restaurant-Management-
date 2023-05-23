const explore = document.querySelector(".btn-explore");
const addplate= document.querySelectorAll(".btn-addToPlate");
//button clicking function defined
const fun = function () {
  window.open("explore.html", "_self");
};

explore.addEventListener("click", fun);

