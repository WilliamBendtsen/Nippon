"use strict"
document.addEventListener("DOMContentLoaded", function () {
  // Function to update greeting
  function updateGreeting() {
      let today = new Date();
      let hourNow = today.getHours();
      let greeting;

      if (hourNow >= 18) {
          greeting = "Godaften - こんばんは";
      } else if (hourNow >= 15) {
          greeting = "Godeftermiddag - こんにちは";
        } else if (hourNow >= 11) {
          greeting = "Goddag - 良い夕食";
      } else if (hourNow >= 5) {
          greeting = "Godmorgen - おはよう";
      } else if (hourNow >= 0) {
          greeting = "Godnat - おやすみ ";
      } else {
          greeting = "Velkommen - こんにちは ";
      }

      let greetingMessageElement = document.getElementById("greetingMessage");

      if (greetingMessageElement) {
          greetingMessageElement.textContent = greeting;
      }

      // Schedule the next update after 1 minute
      setTimeout(updateGreeting, 60000); // 60000 milliseconds = 1 minute
  }

  // Initial call to start the update loop
  updateGreeting();

  // Smooth scrolling for anchor links
  var scrollDownLinks = document.querySelectorAll('#hero-pil');
  scrollDownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Important for the navbar dropdown menu!
  const navbarLink = document.querySelector('#navbar-link2');
  const dropdownContent = document.querySelector('.dropdown-content');

  navbarLink.addEventListener('mouseover', () => {
      dropdownContent.style.display = 'block'; // Show dropdown content
  });

  dropdownContent.addEventListener('mouseleave', () => {
      dropdownContent.style.display = 'none'; // Hide dropdown content when the mouse leaves
  });
});

function redirectToIndex() {
    window.location.href = "index.html"
}

function redirectToMaeltidskasser() {
    window.location.href = "maeltidskasser.html"
}