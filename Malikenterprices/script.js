function sendEmail() {
  // Get field values
  const name = document.getElementById("exampleFormControlInput2").value.trim();
  const email = document.getElementById("exampleFormControlInput1").value.trim();
  const message = document.getElementById("exampleFormControlTextarea1").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before sending the message.");
    return; // Stop function if any field is empty
  }

  // Template params (match these keys with your EmailJS template variables)
  let templateParams = {
    user_name: name,
    user_email: email,
    user_message: message,
  };

  // Send email
  emailjs.send("service_t67utpx", "template_auj38vg", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent successfully!");

      // Optional: Reset form fields after success
      document.getElementById("exampleFormControlInput2").value = "";
      document.getElementById("exampleFormControlInput1").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
    }, function (error) {
      console.log("FAILED...", error);
      alert("There was an error sending your message. Please try again later.");
    });
}

window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
