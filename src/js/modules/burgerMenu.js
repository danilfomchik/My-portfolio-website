function burgerMenu() {
    const burgerMenu = document.querySelector('.menu-btn');
    const menuList = document.querySelector('.menu-list');
    const body = document.querySelector('body');

    //burger menu
    burgerMenu.addEventListener('click', function (e) {
        e.preventDefault();

        this.classList.toggle('menu-btn_active');

        menuList.classList.toggle('activeMenu-list');
        body.classList.toggle('mobileScroll');
    });
}

export {burgerMenu};
