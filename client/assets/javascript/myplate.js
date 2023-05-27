const home = document.querySelector(".btn-home");

const funHome = function(){
  window.open("home.html", "_self");
};

home.addEventListener("click", funHome)

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


// swiper for the 
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

console.log("i am an local project aside form the git");
//swiper1 function ends

