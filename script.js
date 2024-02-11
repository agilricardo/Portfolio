// NAVBAR SCRIPT
let toggle = document.querySelector(".toggle");
let navbar = document.querySelector("nav ul");
let nav = document.querySelector("nav");

toggle.onclick = () => {
  navbar.classList.toggle("show");
  toggle.classList.toggle("active");
};

document.querySelectorAll("li a").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    navbar.classList.remove("show");
    toggle.classList.remove("active");
    nav.classList.remove("nav-active");
  });
});

window.onscroll = () => {
  if (window.scrollY > 100 && !navbar.classList.contains("show")) {
    nav.classList.add("nav-active");
  } else {
    nav.classList.remove("nav-active");
  }
};
// NAVBAR SCRIPT END

// PRELOADER
$(document).ready(function () {
  $(".preloader").delay(2000).fadeOut();
});
// PRELOADER END

// TEXT AUTO INPUT
let typed = new Typed(".auto-input", {
  strings: ["Designer", "Developer"],
  typedSpeed: 50,
  backSpeed: 50,
  loop: true,
});
// TEXT AUTO INPUT END

// DARK MODE
const body = document.querySelector("body"),
  tombol = document.querySelector(".tombol"),
  aboutImage = document.querySelector(".about .image img"),
  logoImage = document.querySelector("nav .logo a img");

let mode = localStorage.getItem("mode");
if (mode && mode === "dark") {
  body.classList.add("dark");
  tombol.classList.add("active");
  aboutImage.src = "assets/about body.dark.png";
  logoImage.src = "assets/logo body.dark.png";
}

tombol.addEventListener("click", () => {
  body.classList.toggle("dark");
  tombol.classList.toggle("active");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light");

    aboutImage.src = "assets/about.png";
    logoImage.src = "assets/logo.png";
    return;
  }

  localStorage.setItem("mode", "dark");
  aboutImage.src = "assets/about body.dark.png";
  logoImage.src = "assets/logo body.dark.png";
});

// Remove redundant click event listener
// tombol.addEventListener("click", () => tombol.classList.tombol("active"));
// DARK MODE END
