// Botão de menu para dispositivos móveis
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavLinks = document.getElementById("mobileNavLinks");

mobileMenuBtn.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("active");
});
