const signupHandler = async function (event) {
  event.preventDefault();
  // Variables for input elements
  const first_name = document.querySelector("#first-name-input").value.trim();
  const last_name = document.querySelector("#last-name-input").value.trim();
  const address = document.querySelector("#address-input").value.trim();
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();

  // Variable for hidden error message
  const errorEl = document.getElementById("error-message");

  // If the password isn't the right length, don't bother sending the request
  if (password.length < 8) {
    errorEl.classList.remove("visually-hidden");
    return;
  }

  // Send post request to signup route
  const response = await fetch("/user/", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      password: password,
      email: email,
      address: address,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // Send them home if log in worked
  if (response.ok) {
    document.location.replace("/");
  } else {
    // Alert them if not
    alert("Failed to sign up");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
