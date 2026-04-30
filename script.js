document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page from refreshing

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("form-message");

  if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
      return;
  }

  const params = {
      from_name: name,
      from_email: email,
      message: message
  };

  emailjs.send("service_9ufphl6", "template_ihoqkgn", params)
    .then(function() {
        alert(`Hello, ${name}! Message sent successfully!`);
        document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
        alert(`Error: Failed to send message`);
        console.error(error);
    });

  //Greet!
  

  // clear form
  //document.getElementById("contact-form").reset();
});
