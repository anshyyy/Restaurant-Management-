const explore = document.querySelector(".btn-explore");
const addplate= document.querySelectorAll(".btn-addToPlate");
//button clicking function defined
const fun = function () {
  window.open("explore.html", "_self");
};

explore.addEventListener("click", fun);

// Swiper function defined
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  freeModeSticky: true,
  speed: 900, // Adjust the value as needed
  effect: 'slide',
  simulateTouch: true,
});
//swiper function ends



// addplate.forEach(e=>{
//   e.addEventListener("click", function(){
//    e.innerHTML="Remove Item"
//    e.style.backgroundColor="#0d5d56"
//    });
// });

console.log("i am an local project aside form the git");