const checkoutHandler = async function (event) {
    event.preventDefault();

    
    const response = await fetch("/checkout/confirm-order", {
        method: "POST",
        body: JSON.stringify({
        }),
        headers:{"Content-Type": "application/json"}
    })


    if(response.ok) {
        document.location.replace('/confirmed')
    } else {
        alert('Checkout failed')
    }
};

document
    .addEventListener("submit", checkoutHandler)