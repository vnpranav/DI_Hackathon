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