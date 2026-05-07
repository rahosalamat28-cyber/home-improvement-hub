const leadForm = document.getElementById('lead-form');

leadForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Stops the page from flickering/refreshing

    const formData = new FormData(this);
    const button = this.querySelector('button');
    
    // Change button text to show it's working
    button.innerText = "Sending...";
    button.disabled = true;

    // Send the data to Formspree
    const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        // What happens when the email is successfully sent:
        this.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>✅ Success!</h2>
                <p>Thanks for your interest. One of our Solar Experts will contact you within 24 hours.</p>
            </div>
        `;
    } else {
        // What happens if there is an error:
        alert("Oops! There was a problem. Please try again.");
        button.innerText = "Check Eligibility";
        button.disabled = false;
    }
});