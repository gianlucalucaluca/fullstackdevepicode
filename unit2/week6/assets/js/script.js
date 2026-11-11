const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTema.textContent = "Tema chiaro";
  } else {
    btnTema.textContent = "Tema scuro";
  }
});