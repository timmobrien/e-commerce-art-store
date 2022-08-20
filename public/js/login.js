const loginHandler = async function(event) {
    event.preventDefault();
  
    const passwordEl = document.querySelector("#login-password").value.trim();
    const emailEl = document.querySelector('#login-email').value.trim()


    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailEl,
        password: passwordEl
      }),
      headers: { "Content-Type": "application/json" }
    })

    console.log(response)
    if(response.ok) {
      document.location.replace('/')
    } else {
      alert('Incorrect username or password')
    }
  };
  
  document
    .querySelector(".login-form")  
    .addEventListener("submit", loginHandler);