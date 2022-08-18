const loginHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#"); 
    const passwordEl = document.querySelector("#");

    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/"); 
      })
      .catch(err => {
        console.log(err);
      })
  };
  
  document
    .querySelector("#login-form")  
    .addEventListener("submit", loginHandler);