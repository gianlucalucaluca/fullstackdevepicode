/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti

const tabellone = document.querySelector("#tabellone");
const ultimoNumero = document.querySelector("#ultimo-numero");
const bottoneEstrai = document.querySelector("#estrai");

// 1. tabellone
function rendiTabellone() {
  tabellone.innerHTML = "";

  for (let n = 1; n <= 90; n++) {
    const casella = document.createElement("div");
    casella.classList.add("numero");
    casella.textContent = n;

    if (usciti.includes(n)) {
      casella.classList.add("uscito");
    }

    tabellone.appendChild(casella);
  }
}

// 2. estrazione
function estrai() {
  const disponibili = [];
  for (let n = 1; n <= 90; n++) {
    if (!usciti.includes(n)) {
      disponibili.push(n);
    }
  }

  if (disponibili.length === 0) {
    alert("Tutti i numeri sono usciti!");
    return;
  }

  const posizione = Math.floor(Math.random() * disponibili.length);
  const numero = disponibili[posizione];

  usciti.push(numero);
  ultimoNumero.textContent = numero;
  rendiTabellone();
}

bottoneEstrai.addEventListener("click", estrai);

// TODO: rendiCronologia(), reset, extra

rendiTabellone();
