const explore = document.querySelector(".btn-explore");

//button clicking function defined
const fun = function () {
  window.open("explore.html", "_self");
};

explore.addEventListener("click", fun);

// Swiper function defined
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 60,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
