function contactForm() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');

    const contactButton = document.querySelectorAll('.contact_button');
    const forms = document.querySelectorAll('form');

    signUpButton.addEventListener('click', () => {
        main.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', () => {
        main.classList.remove('right-panel-active');
    });
}

export {contactForm};
