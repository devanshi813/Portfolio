(function () {
    emailjs.init("xYBr8fLnWOjkBB5vt"); // Replace with your EmailJS user ID
})();

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);

    // Send email using EmailJS
    emailjs.send("service_htyiyq8", "template_4tm8rkg", formData)
        .then(function (response) {
            console.log("Email sent:", response);
            // Handle success (e.g., show a success message)
        }, function (error) {
            console.error("Error sending email:", error);
            // Handle error (e.g., show an error message)
        });
});
