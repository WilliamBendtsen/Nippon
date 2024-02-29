"use strict";

// Javascript til at åbne og lukke pop-uppen
const modal = document.querySelector('#oplevelsespakke-modal');
const openModal = document.querySelector('#oplevelsespakke-laes-mere');
const closeModal = document.querySelector('#oplevelsespakke-kryds');
let modalLinks;

openModal.addEventListener('click', () => {
    modal.showModal();

    
// Javascript til at vise bestemte sections ud fra hvilket <a> der er klikket på

    // Hide all sections except the first one initially
    const sections = modal.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    // Underline the first <li>
    const firstLink = modalLinks[0];
    if (firstLink) {
        firstLink.classList.add('clicked');
    }
});

closeModal.addEventListener('click', () => {
    modal.close();
});

// Get all the <a> elements in the modal
modalLinks = modal.querySelectorAll('a.popup-link');

// Add event listeners to each <a> element
modalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Toggle 'clicked' class on the clicked link
        link.classList.toggle('clicked');

        // Remove 'clicked' class from other links
        modalLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('clicked');
            }
        });

        // Hide all sections
        const sections = modal.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Get the ID of the corresponding section based on the clicked link
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block'; // Show the corresponding section
        }

        // Show the corresponding aside
        const correspondingAside = document.getElementById(sectionId + '-aside');
        if (correspondingAside) {
            correspondingAside.style.display = 'grid';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the popup links
    const popupLinks = document.querySelectorAll('.popup-link');

    popupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
    
            const targetId = link.getAttribute('href').substring(1);
            const correspondingAside = document.getElementById(targetId + '-aside');
            if (correspondingAside) {
                const asides = document.querySelectorAll('dialog aside');
                asides.forEach(function(aside) {
                    if (aside !== correspondingAside) {
                        aside.style.display = 'none';
                    }
                });
            }
        });
    });
});

// Javascript så bestil- og favoritknapperne henviser til henholdsvis bestil.html og favoritter.html

function redirectToBestil() {
    window.location.href = "bestil.html";
}

function redirectToFavoritter() {
    window.location.href = "favoritter.html"
}