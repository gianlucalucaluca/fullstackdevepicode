/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

// costanti base
const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

// array
const myTask = [
  { titoloTask: "Pagare le bollette", priorita: "alta", data: new Date() },
  { titoloTask: "Studiare JavaScript", priorita: "media", data: new Date() },
  { titoloTask: "Comprare il pane", priorita: "bassa", data: new Date() },
  { titoloTask: "Chiamare il dentista", priorita: "alta", data: new Date() },
  { titoloTask: "Riposarsi", priorita: "bassa", data: new Date() },
];

//  funzioni x array
function aggiungiTask() {
  myTask.forEach((task) => {
    // li + colore priorità (sempre per primo)
    const newLi = document.createElement("li");
    newLi.classList.add(`priorita-${task.priorita}`);

    // testo
    const spanTesto = document.createElement("span");
    spanTesto.textContent = task.titoloTask;
    newLi.appendChild(spanTesto);

    // badge
    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = task.priorita;
    newLi.appendChild(badge);

    // data e bottone elimina
    const spanData = document.createElement("span");
    spanData.classList.add("data", "divData");
    spanData.textContent = task.data.toLocaleString("it-IT");

    const bottone = document.createElement('button');
    bottone.textContent = 'Elimina';
    spanData.appendChild(bottone);
    newLi.appendChild(spanData);

    // li finito nella lista
    lista.appendChild(newLi);
  });
}

  // counter
function aggiornaContatore() {
  contatore.textContent = myTask.length;
}

// go
aggiungiTask();
aggiornaContatore();
