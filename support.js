document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var donationData = {};
    formData.forEach(function(value, key){
        donationData[key] = value;
    });
    
    // Here you can send the donationData to your server using AJAX for further processing.
    // Example:
    // fetch('process_donation.php', {
    //     method: 'POST',
    //     body: JSON.stringify(donationData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // Handle response from server
    // })
    // .catch(error => console.error('Error:', error));
    
    // For demonstration, let's just log the donationData object
    console.log(donationData);
    
    // Reset form fields after submission
    this.reset();
});
