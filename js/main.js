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

let item = document.querySelector("a#drop");
let itemDrop = document.querySelector("div.computers");
let flag = true;
item.addEventListener("click", function () {
  if (flag === true) {
    itemDrop.style.display = "block";
    flag = false;
  } else {
    itemDrop.style.display = "none";
    flag = true;
  }
});

let items = document.querySelector("a#dropBusiness");
let itemDrops = document.querySelector("div.computersBusiness");
let me = true;
items.addEventListener("click", function () {
  if (me === true) {
    itemDrops.style.display = "block";
    me = false;
  } else {
    itemDrops.style.display = "none";
    me = true;
  }
});

let itemss = document.querySelector("a#all");
let itemDropss = document.querySelector("div.allMicro");
let menu = true;
itemss.addEventListener("click", function () {
  if (menu === true) {
    itemDropss.style.display = "block";
    menu = false;
  } else {
    itemDropss.style.display = "none";
    menu = true;
  }
});
