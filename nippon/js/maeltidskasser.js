"use strict"

const modal = document.querySelector('#oplevelsespakke-modal');
const openModal = document.querySelector('#oplevelsespakke-laes-mere');
const closeModal = document.querySelector('#oplevelsespakke-kryds');

openModal.addEventListener('click', () => {
    modal.showModal();
})