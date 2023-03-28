let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("override-nav", "navbar-light");
  } else {
    nav.classList.remove("override-nav", "navbar-dark");
  }
});
