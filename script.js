//note Seleziono gli elementi del DOM
const button = document.getElementById("generate-btn");
const list = document.getElementById("email-list");

button.addEventListener("click", function () {
  list.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        const email = res.data.response;
        list.innerHTML += `<li class="list-group-item">${email}</li>`;
      })
      .catch((error) => console.error("Error:", error));
  }
});
