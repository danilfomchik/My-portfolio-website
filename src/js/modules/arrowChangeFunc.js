export function changeArrow() {
    const arrow = document.querySelector('.fa-play');

    //change arrow direcrion
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
    });
    
    const imgWrapper = document.querySelectorAll('.imgWrapper');

    function projectHover(imgWrapper, action) {
        imgWrapper.forEach(wrapper => {
            wrapper.addEventListener(action, () => {
                wrapper.classList.toggle('activeProject');
            });
        });
    };
    
    projectHover(imgWrapper, 'mouseover');
    projectHover(imgWrapper, 'mouseout');
}