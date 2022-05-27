import { animateSvg } from "./animateSvg.js";

function frontSvg() {
    const frontSvg = document.querySelectorAll("#textClip .text1");

    animateSvg(frontSvg);
}

export { frontSvg }