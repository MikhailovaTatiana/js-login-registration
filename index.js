let loginPage = document.querySelector('#login-page');
let registerPage = document.querySelector('#register-page');
let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');

togglePages();

function togglePages() {
    loginPage.addEventListener('click', () => {
        loginForm.classList.remove('login-form');
        loginForm.classList.add('register-form');
        registerForm.classList.remove('register-form');
        registerForm.classList.add('login-form');
    });
    registerPage.addEventListener('click', () => {
        registerForm.classList.remove('login-form');
        registerForm.classList.add('register-form');
        loginForm.classList.remove('register-form');
        loginForm.classList.add('login-form');
    });
};