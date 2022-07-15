function contactForm() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');

    const contactButton = document.querySelectorAll('.contact_button');
    const forms = document.querySelectorAll('form');

    // contactButton.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         forms.forEach(form => {
    //             let inpts = form.querySelectorAll('input');
    //             console.log(inpts);
    //             // form.reset();
    //         });
    //     });
    // });

    // console.log(forms);

    signUpButton.addEventListener('click', () => {
        main.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
        main.classList.remove("right-panel-active");
    });
}

export { contactForm };