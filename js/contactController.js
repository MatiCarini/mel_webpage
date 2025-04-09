const emailKey = "XNcrD3C9MgUOTXfDL";

window.onload = function () {
  emailjs.init({
    publicKey: emailKey,
  });
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        () => {
          alert("Email enviado con éxito");
        },
        (error) => {
          alert(
            "Error al enviar su email. Por favor intente enviandonos un email directamente a @metalurgicalobato@gmail.com desde su cuenta."
          );
        }
      );
      document.getElementById("contact-form").reset();
    });
};
