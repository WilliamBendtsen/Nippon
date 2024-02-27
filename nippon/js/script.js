"use strict"
document.addEventListener("DOMContentLoaded", function() {
    var scrollDownLinks = document.querySelectorAll('#hero-pil');
    scrollDownLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



// VIGTIGT til nav bar dropw down menu! 

// Get the navbar link and dropdown content elements

const navbarLink = document.querySelector('#navbar-link2');
const dropdownContent = document.querySelector('.dropdown-content');

// Add event listeners to the navbar link and dropdown content
navbarLink.addEventListener('mouseover', () => {
  dropdownContent.style.display = 'block'; // Show dropdown content
});

dropdownContent.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none'; // Hide dropdown content when the mouse leaves
});