"use strict";

const modal = document.querySelector('#oplevelsespakke-modal');
const openModal = document.querySelector('#oplevelsespakke-laes-mere');
const closeModal = document.querySelector('#oplevelsespakke-kryds');

openModal.addEventListener('click', () => {
    modal.showModal();
    
    // Hide all images initially
    const images = modal.querySelectorAll('section img');
    images.forEach(img => {
        img.style.display = 'none';
    });

    // Show the first section initially
    const firstSection = modal.querySelector('section');
    if (firstSection) {
        firstSection.style.display = 'block';

        // Show the image of the first section
        const firstImage = firstSection.querySelector('img');
        if (firstImage) {
            firstImage.style.display = 'block';
        }
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
const modalLinks = modal.querySelectorAll('a.popup-link');

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

    // Show the image of the corresponding section
    const image = section.querySelector('img');
    if (image) {
        image.style.display = 'block';
    }

    // Show the aside of the corresponding section
    const aside = section.querySelector('aside');
    if (aside) {
        aside.style.display = 'block'; // Or 'flex' depending on your styling
    }
}

        // Show the modal
        modal.showModal();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the popup links
    var popupLinks = document.querySelectorAll('.popup-link');

    // Add click event listener to each popup link
    popupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Hide all asides
            var asides = document.querySelectorAll('dialog aside');
            asides.forEach(function(aside) {
                aside.style.display = 'none';
            });

            // Get the target section ID from the href attribute
            var targetId = link.getAttribute('href').substring(1);

            // Show the corresponding aside
            var correspondingAside = document.getElementById(targetId);
            if (correspondingAside) {
                correspondingAside.style.display = 'block';
            }

            // Show the modal
            var modal = document.getElementById('oplevelsespakke-modal');
            modal.showModal();
        });
    });

    // Add click event listener to the close button
    var closeButton = document.getElementById('oplevelsespakke-kryds');
    closeButton.addEventListener('click', function() {
        var modal = document.getElementById('oplevelsespakke-modal');
        modal.close();
    });
});