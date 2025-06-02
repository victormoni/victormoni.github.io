document.addEventListener("DOMContentLoaded", () => {
  const anoElemento = document.getElementById("ano-atual");
  if (anoElemento) {
    anoElemento.textContent = new Date().getFullYear();
  }
});

document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

const formContato = document.getElementById("form-contato");
formContato.addEventListener("submit", function (e) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos antes de enviar.");
  }
});

// Exibe uma mensagem no console
console.log("JavaScript carregado a partir de assets/js/main.js");
