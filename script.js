// NAVBAR SCRIPT
let toggle = document.querySelector(".toggle");
let navbar = document.querySelector("nav ul");
let nav = document.querySelector("nav");

toggle.onclick = () => {
  navbar.classList.toggle("show");
  toggle.classList.toggle("active");
};

// Tambahkan event listener pada setiap elemen "li a"
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
// TEXT AUTO INPUT
let typed = new Typed(".auto-input", {
  strings: ["Designer", "Developer"],
  typedSpeed: 50,
  backSpeed: 50,
  loop: true,
});
// TEXT AUTO INPUT END

// SCROLL REVEAL
const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

sr.reveal(".main .content h4", { delay: 200, origin: "top" });
sr.reveal(".main .content h1", { delay: 400, origin: "left" });
sr.reveal(".main .content p", { delay: 600, origin: "right" });
sr.reveal(".main .content button", { delay: 800, origin: "bottom" });
sr.reveal(".main .image", { delay: 1000, origin: "right" });
// SCROLL REVEAL END

// DARK MODE
const body = document.querySelector("body"),
  tombol = document.querySelector(".tombol"),
  aboutImage = document.querySelector(".about .image img");

let mode = localStorage.getItem("mode");
if (mode && mode === "dark") {
  body.classList.add("dark");
  tombol.classList.add("active");
  aboutImage.src = "assets/about-dark.png";
}

tombol.addEventListener("click", () => {
  body.classList.toggle("dark");
  tombol.classList.toggle("active");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light");

    aboutImage.src = "assets/about.png";
    return;
  }

  localStorage.setItem("mode", "dark");
  aboutImage.src = "assets/about-dark.png";
});

// Remove redundant click event listener
// tombol.addEventListener("click", () => tombol.classList.tombol("active"));
// DARK MODE END
