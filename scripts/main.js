const nav = document.getElementById("site-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});