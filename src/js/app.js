import * as burgerMenu from "./modules/burgerMenu.js"
import * as arrowChangeFunc from "./modules/arrowChangeFunc.js"
import * as flip3dCard from "./modules/flip3d.js"
import * as cursor from "./modules/cursor.js"
import * as scrollUp from "./modules/scrollUp.js"
import * as activeMenu from "./modules/activeMenu.js"



window.addEventListener('DOMContentLoaded', () => {
    // flip3d card module
    flip3dCard.flip3dCard();

    // burgerMenu module
    burgerMenu.burgerMenu();

    // change arrow module
    arrowChangeFunc.changeArrow();
    
    // cursor module
    cursor.cursor();

    // scroll up module
    scrollUp.scrollUp();
    
    // active menu module
    activeMenu.activeMenu();

});