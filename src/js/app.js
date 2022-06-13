import { burgerMenu } from './modules/burgerMenu.js'
import { changeArrow } from './modules/arrowChangeFunc.js'
import { flip3dCard } from './modules/flip3d.js'
import { cursor } from './modules/cursor.js'
import { scrollUp } from './modules/scrollUp.js'
import { activeMenu } from './modules/activeMenu.js'
import { activeHeader } from './modules/activeHeader.js'
import { renderPortfolio } from './modules/renderPortfolio.js'
import { shakeTools } from './modules/shakeTools.js'
import { frontSvg } from './modules/frontSvg.js'
import { backSvg } from './modules/backSvg.js'
import { contactForm } from './modules/contactForm.js'


window.addEventListener('DOMContentLoaded', () => {
    // active header
    activeHeader();

    // flip3d card module
    flip3dCard();

    // burgerMenu module
    burgerMenu();

    // change arrow module
    changeArrow();

    // scroll up module
    scrollUp();
    
    // active menu module
    activeMenu();

    //render portfolio cards
    renderPortfolio();

    // cursor module
    cursor();

    // shake tools module
    shakeTools();

    // animate services text module
    frontSvg();

    // animate services text module
    backSvg();

    contactForm();
});