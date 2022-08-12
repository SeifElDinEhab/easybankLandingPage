const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-wrapper");
const links = document.querySelectorAll(".link");

function toggleClasses() {
  if (hamburger.getAttribute("src") === "images/icon-hamburger.svg") {
    hamburger.setAttribute("src", "images/icon-close.svg");
  } else {
    hamburger.setAttribute("src", "images/icon-hamburger.svg");
  }
  nav.classList.toggle("active");
}

hamburger.addEventListener("click", toggleClasses);
links.forEach((link) => {
  link.addEventListener("click", toggleClasses);
});
