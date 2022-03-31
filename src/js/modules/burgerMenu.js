export function burgerMenu() {
    const burgerMenu = document.querySelector('.menu-btn');

    //burger menu
    burgerMenu.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.toggle('menu-btn_active');
    });
    //burger menu
}