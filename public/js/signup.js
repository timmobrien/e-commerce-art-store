const signupHandler = async function(event) {
    event.preventDefault();
  
    const first_name = document.querySelector("#first-name-input").value.trim();
    const last_name = document.querySelector("#last-name-input").value.trim();
    const address = document.querySelector("#address-input").value.trim();
    const email= document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();

    const response = await fetch("/user/", {
      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        address: address,
      }),
      headers: { "Content-Type": "application/json" }
    })
    console.log("RESPONSE: "+response)
      if(response.ok) {
        document.location.replace('/')
      } else {
        alert('Failed to sign up')
      }
      
  };
  
  document
    .querySelector(".signup-form") 
    .addEventListener("submit", signupHandler);