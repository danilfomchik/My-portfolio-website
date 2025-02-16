function changeArrow() {
    const arrow = document.querySelector('.fa-play');

    //change arrow direcrion
    arrow.addEventListener('click', e => {
        e.preventDefault();
    });
}

export {changeArrow};
