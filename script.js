document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page from refreshing

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("form-message");

  // simple validation
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  // success message (since we’re not sending to a server)
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  // clear form
  document.getElementById("contact-form").reset();
});
