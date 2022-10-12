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
