const explore = document.querySelector(".btn-explore");
const myplate = document.querySelector(".btn-myPlate");
const addplate= document.querySelectorAll(".btn-addToPlate");

//button clicking function defined
const funExplore = function () {
  window.open("explore.html", "_self");
};

const funPlate = function(){
  window.open("myplate.html", "_self");
};
explore.addEventListener("click", funExplore);
myplate.addEventListener("click", funPlate)

// Swiper function defined
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  freeMode: true,
  freeModeSticky: true,
  speed: 900, // Adjust the value as needed
  effect: 'slide',
  simulateTouch: true,
});
//swiper1 function ends


var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  freeMode: true,
  freeModeSticky: true,
  speed: 900, // Adjust the value as needed
  effect: 'slide',
  simulateTouch: true,
});
// swiper 2 function ends


var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  freeMode: true,
  freeModeSticky: true,
  speed: 900, // Adjust the value as needed
  effect: 'slide',
  simulateTouch: true,
});
// swiper 3 function ends

var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  freeMode: true,
  freeModeSticky: true,
  speed: 900, // Adjust the value as needed
  effect: 'slide',
  simulateTouch: true,
});
// swiper 4 function ends


addplate.forEach(e=>{
  e.addEventListener("click", function(){
   e.innerHTML="Remove Item"
   e.style.backgroundColor="#0d5d56"
   });
});
console.log("i am an local project aside form the git");