const pageTop = document.querySelector(".page-top");
const navBar = document.querySelector('[data-type="navBar"]');

//intersection observer observing the element pageTop
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    navBar.classList.remove("active");
  } else {
    navBar.classList.add("active");
  }
});

observer.observe(pageTop);
