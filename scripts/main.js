const nav = document.getElementById("site-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});
const burger = document.getElementById("nav-burger");
const menu = document.getElementById("nav-menu");


burger.addEventListener("click", () => {
  menu.classList.toggle("is-open");
  burger.classList.toggle("is-open");
});

const placeholder = document.getElementById("video-placeholder");

  placeholder.addEventListener("click", () => {
    placeholder.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/du-TY1GUFGk?autoplay=1"
        title="Showreel"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="width:100%; height:100%; border-radius:5px;"
      ></iframe>
    `;
  });
