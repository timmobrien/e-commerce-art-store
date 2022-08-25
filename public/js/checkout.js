const checkoutHandler = async function (event) {
    event.preventDefault();

    // Send post request when user clicks submit button
    const response = await fetch("/checkout/confirm-order", {
        method: "POST",
        body: JSON.stringify({
        }),
        headers:{"Content-Type": "application/json"}
    })

    // If checkout process worked, send user to confirmation page
    if(response.ok) {
        document.location.replace('/confirmed')
    } else {
        // Else alert them
        alert('Checkout failed')
    }
};

document
    .addEventListener("submit", checkoutHandler)