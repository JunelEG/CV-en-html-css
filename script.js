// ── Theme toggle ──
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ── Hamburger menu ──
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  mainNav.classList.toggle("open");
});

// Cierra el menú al hacer click en un link
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    mainNav.classList.remove("open");
  });
});

// ── Contact form ──
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Llene todos los campos");
  } else {
    alert("Mensaje enviado");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});