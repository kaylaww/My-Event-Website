const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login_button');
const iconClose = document.querySelector('.icon-close');

// Add an event listener to the register link
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

// Add an event listener to the login link
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Add an event listener to the login button
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

// Add an event listener to the close icon
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});