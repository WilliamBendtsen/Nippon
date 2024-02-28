"use strict";

// Declare modal and modalLinks variables in the global scope
const modal = document.querySelector('#oplevelsespakke-modal');
const openModal = document.querySelector('#oplevelsespakke-laes-mere');
const closeModal = document.querySelector('#oplevelsespakke-kryds');
let modalLinks;

openModal.addEventListener('click', () => {
    modal.showModal();
    
    // Hide all sections except the first one initially
    const sections = modal.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    // Show the first section initially
    const firstSection = sections[0];
    if (firstSection) {
        firstSection.style.display = 'block';
    }

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
    
            const modal = document.getElementById('oplevelsespakke-modal');
            modal.showModal();
        });
    });

    // Add click event listener to the close button
    const closeButton = document.getElementById('oplevelsespakke-kryds');
    closeButton.addEventListener('click', function() {
        const modal = document.getElementById('oplevelsespakke-modal');
        modal.close();
    });
});

// Javascript så bestil knappen henviser til bestil.html

function redirectToKurv() {
    window.location.href = "kurv.html";
}