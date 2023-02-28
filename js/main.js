var swiper = new Swiper(".myShila", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySurface", {
  slidesPerView: 1.5,
  effect: "coverflow",
  loop: "true",
  loopFillGroupWithBlank: "true",
  centeredSlides: "true",
  spaceBetween: 0,
  /*autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },*/
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
  },
});