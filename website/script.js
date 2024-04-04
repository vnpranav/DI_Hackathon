// code for progress bar
function animateProgressBar(progressBar, duration) {
    let progress = 0;
    const increment = 1 / duration * 100; // Adjust the increment value for desired smoothness
  
    const interval = setInterval(() => {
      progress += increment;
      progressBar.style.width = `${progress}%`;
  
      if (progress >= 90) {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval duration for desired speed
  }
  
  const progressBar = document.querySelectorAll('.progress');
  progressBar.forEach(bar => {
    animateProgressBar(bar, 500);
  })
 // Example: animates to 30% in 2 seconds

 document.addEventListener("DOMContentLoaded", function () {
  // Get the contact form
  const contactForm = document.getElementById("contactForm");

  // Add event listener for form submission
  contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Get form data
      const formData = new FormData(contactForm);

      // You can add more sophisticated validation here if needed
      if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
          alert("Please fill in all the required fields.");
          return;
      }

      // Send the form data to the server or perform any other action
      console.log({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
      });

      // Clear the form after submission
      contactForm.reset();
  });
});