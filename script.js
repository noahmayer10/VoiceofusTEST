// Example script to log form submissions (can be expanded securely)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("eventForm");
    form.addEventListener("submit", () => {
      console.log("Form submitted");
    });
  });
  