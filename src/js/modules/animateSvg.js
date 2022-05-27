function animateSvg(selector) {
    const colors = ['rgb(12, 15, 22)','#51cad8','#75DAB4'];
    const numLines = 3;
    let currCount = numLines;
    const blobs = document.querySelectorAll("#background path");

    function colorBlobs() {
        blobs.forEach(blob => {
            blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
        });
    }
    
    function nextIteration(selector) {
        // Change the color of all the blobs
        colorBlobs();
        
        // Hide the old set of lines
        let startVal = currCount - numLines;
        if(startVal < 0) {
            startVal = selector.length - numLines;
        }
        for(let i = startVal; i < startVal + numLines; i++) {
            selector[i].style.display = "none";
        }
        // Show new set of lines
        for(let j = currCount; j < currCount + numLines; j++) {
            selector[j].style.display = "inline";
        }
        currCount += numLines;
        if(currCount >= selector.length) {
            currCount = 0;
        }
    }
    
    blobs[0].addEventListener("animationiteration", () => nextIteration(selector));
    
    colorBlobs();
}

export { animateSvg }