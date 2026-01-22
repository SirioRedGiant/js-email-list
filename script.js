//note Seleziono gli elementi del DOM
const button = document.getElementById("generate-btn");
const list = document.getElementById("email-list");
const loader = document.getElementById("loader");

button.addEventListener("click", function () {
  //fixed interfaccia
  list.innerHTML = ""; //note: svuota la vecchia lista se presente
  loader.classList.remove("d-none"); //note: Mostra il caricamento
  button.disabled = true; //note: Disabilita il bottone

  let counter = 0; //^ contatore che conte le email,arrivati a 10 il caricamento deve finire

  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        const email = res.data.response;

        //note aggiungo l'email alla lista
        list.innerHTML += `<li class="list-group-item">${email}</li>`;

        //^ incremento del contatore
        counter++;
        //^ Se il counter è = 10 il loading è finito
        if (counter === 10) {
          loader.classList.add("d-none");
          button.disabled = false;
        }
      })

      .catch((error) => {
        console.error("Error:", error);

        //note In caso di errore avviso l'utente e riattivo il bottone
        loader.innerHTML = `<p class="text-danger">Si è verificato un errore, riprova</p>`;
        button.disabled = false;
      });
  }
});
