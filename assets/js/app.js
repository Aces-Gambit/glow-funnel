import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const pageTop = document.querySelector(".page-top");
const navBar = document.querySelector('[data-type="navBar"]');

//intersection observer observing the element pageTop
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    navBar.classList.remove("active");
    // mainContent.classList.remove("nav-space");
  } else {
    navBar.classList.add("active");
    // mainContent.classList.add("nav-space");
  }
});

observer.observe(pageTop);

//query selector for qa__header-item class
const qaHeaderItem = document.querySelectorAll(".qa__header-item");
//loop through the qaHeaderItem array assigning a click event to each element
qaHeaderItem.forEach((item) => {
  item.addEventListener("click", function () {
    event.preventDefault();
    //if the clicked element has the class active return
    if (this.classList.contains("active")) {
      return;
    } else {
      //remove the active class from all elements
      qaHeaderItem.forEach((item) => {
        item.classList.remove("active");
      });
      //add the active class to the clicked element
      this.classList.add("active");
      //get the data attribute value of the clicked element
      const data = this.getAttribute("data-qa");
      //query selector for qa__content-item class
      const qaContentItem = document.querySelectorAll(".qa__content-item");
      //toggle the active class on the qa__content-item element with the same data attribute value as the clicked element
      qaContentItem.forEach((item) => {
        if (item.getAttribute("data-qa") === data) {
          item.classList.toggle("active");
          //time delay to allow the animation to complete
          setTimeout(() => {
            item.classList.toggle("show");
          }, 100);
        } else {
          setTimeout(() => {
            item.classList.remove("show");
          }, 100);
          item.classList.remove("active");
        }
      });
    }
  });
});

//Hero Thumbnail Slider Config
const swiperThumb = new Swiper(".swiper__thumb", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  centeredSlides: true,
});
//Hero Slider Config
const swiperHero = new Swiper(".swiper__hero", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next__hero",
    prevEl: ".swiper-button-prev__hero",
  },
  thumbs: {
    swiper: swiperThumb,
  },
  zoom: {
    maxRatio: 1.5,
  },
});

//Hero Swiper Zoom
const swiperSlide = document.getElementsByClassName("swiper-slide-hero");
for (let index = 0; index < swiperSlide.length; index++) {
  swiperSlide[index].addEventListener("mouseover", function (e) {
    swiperHero.zoom.in();
  });

  swiperSlide[index].addEventListener("mouseout", function (e) {
    swiperHero.zoom.out();
  });
}

//Ingredient Swiper Config
const swiperIng = new Swiper(".swiper__ing", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination__ing",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next__ing",
    prevEl: ".swiper-button-prev__ing",
  },
  scrollbar: {
    el: ".swiper-scrollbar__ing",
    hide: true,
  },
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 400px
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  autoHeight: true,
});

// Menu Toggle data-type="menu"
const menu = document.querySelector('[data-type="menu"]');
const menuToggleBtn = document.querySelectorAll('[data-type="menuToggleBtn"]');
console.log(menuToggleBtn);

//loop through the menuToggleBtn array assigning a click event to each element
menuToggleBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
