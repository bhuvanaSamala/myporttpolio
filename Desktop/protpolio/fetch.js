<script>
    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form data
        const formData = new FormData(this);
        
        // Convert form data to a JSON object
        const data = Object.fromEntries(formData.entries());

        try {
            // Send the form data using fetch
            const response = await fetch('https://your-server-endpoint.com/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Handle response
            if (response.ok) {
                document.getElementById('form-status').textContent = 'Form submitted successfully!';
                document.getElementById('form-status').style.color = 'green';
                this.reset(); // Reset the form after successful submission
            } else {
                document.getElementById('form-status').textContent = 'There was a problem submitting the form.';
                document.getElementById('form-status').style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('form-status').textContent = 'There was a problem submitting the form.';
            document.getElementById('form-status').style.color = 'red';
        }
    });
</script>
