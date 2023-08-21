const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  // Check if all required fields are filled out
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("mensagem").value;

  if (name == "" || email == "" || subject == "" || message == "") {
    event.preventDefault();
    alert("Por favor, preencha todos os campos obrigatórios.");
  }

  // Check if email is valid
  if (!validateEmail(email)) {
    event.preventDefault();
    alert("O e-mail inserido é inválido.");
  }

  // Check if message is too long
  if (message.length > 1000) {
    event.preventDefault();
    alert("A mensagem é muito longa.");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
