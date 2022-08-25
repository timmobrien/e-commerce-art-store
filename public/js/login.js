const loginHandler = async function(event) {
    event.preventDefault();
  
    // Variables for form inputs
    const passwordEl = document.querySelector("#login-password").value.trim();
    const emailEl = document.querySelector('#login-email').value.trim()

    // Variable for hidden error div
    const errorEl = document.getElementById('error-message')

    // Send post request with user inputs
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailEl,
        password: passwordEl
      }),
      headers: { "Content-Type": "application/json" }
    })

    if(response.ok) {
      // Send them home
      document.location.replace('/')
    } else {
      // Display the error message
      errorEl.classList.remove('visually-hidden')
    }
  };
  
  document
    .querySelector(".login-form")  
    .addEventListener("submit", loginHandler);