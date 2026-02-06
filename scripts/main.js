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
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
  const scrollY = window.pageYOffset + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove("is-active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("is-active");
        }
      });
    }
  });
}


window.addEventListener("scroll", setActiveLink);
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // close mobile menu
    menu.classList.remove("is-open");
    burger.classList.remove("is-open");
  });
});
