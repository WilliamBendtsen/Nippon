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