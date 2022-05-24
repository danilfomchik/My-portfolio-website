function activeHeader() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('activeHeader', window.scrollY > 50);
    });
}

export { activeHeader };