/*const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox() {
    cover_box.classList.add('active');
}

function deactivateCoverBox() {
    cover_box.classList.remove('active');
}

function activatepopup() {
    cover_box.classList.add('active-popup');
}

function deactivatepopup() {
    cover_box.classList.remove('active-popup');
}

registerLink.addEventListener('click',activateCoverBox);
loginLink.addEventListener('click',deactivateCoverBox);
btnPopup.addEventListener('click',activatePopup);
iconClose.addEventListener('click',deactivatePopup);*/

const cover_box = document.querySelector('.cover_box');
const loginLinks = document.querySelectorAll('.login-link');
const registerLinks = document.querySelectorAll('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox() {
    cover_box.classList.add('active');
}

function deactivateCoverBox() {
    cover_box.classList.remove('active');
}

function activatePopup() {
    cover_box.classList.add('active-popup');
}

function deactivatePopup() {
    cover_box.classList.remove('active-popup');
}

// Event listeners for all register/login links
registerLinks.forEach(link => {
    link.addEventListener('click', activateCoverBox);
});

loginLinks.forEach(link => {
    link.addEventListener('click', deactivateCoverBox);
});

btnPopup.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivatePopup);
