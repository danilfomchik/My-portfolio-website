function activeMenu() {
    // active menu active menu active menu active menu active menu active menu
    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu-list__item-link");
    const body = document.querySelector("body");

    const getId = (link) => link.getAttribute("href").substring(1);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuLinks.forEach((link) => {
                        link.classList.toggle(
                            "activeMenuItem",
                            getId(link) === entry.target.id
                        );
                    });
                }
            });
        },
        {
            threshold: 0.7,
        }
    );

    sections.forEach((section) => observer.observe(section));

    const menuList = document.querySelector(".menu-list");
    const burgerMenu = document.querySelector(".menu-btn");

    menuList.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu-list__item-link")) {
            e.preventDefault();

            burgerMenu.classList.toggle("menu-btn_active");
            menuList.classList.toggle("activeMenu-list");
            body.classList.toggle("mobileScroll");

            window.scrollTo({
                top: document.getElementById(getId(e.target)).offsetTop - 60,
                behavior: "smooth",
            });
        }
    });
    // active menu active menu active menu active menu active menu active menu
}

export { activeMenu };
