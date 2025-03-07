function flip3dCard() {
    const card3D = document.querySelector('.card-3d-container');
    const checkItem = document.querySelectorAll('.services__check-item');

    const cardFrontImg = document.querySelectorAll('.card-front__img');
    const cardBackImg = document.querySelectorAll('.card-back__img');

    const arrow = document.querySelector('.fa-play');

    // adding classes for img
    function flipCard(clickingElem, checkedElem) {
        if (clickingElem.dataset.item == checkedElem) {
            addActiveClass(cardFrontImg, 'passiveImg');
            addActiveClass(cardBackImg, 'activeImg');
        } else {
            removeActiveClass(cardFrontImg, 'passiveImg');
            removeActiveClass(cardBackImg, 'activeImg');
        }
    }

    // flip card by clicking
    checkItem.forEach(item => {
        item.addEventListener('click', e => {
            //change arrow direction
            changeArrowDirection(e, arrow);

            //toggle creating/coding btns
            deactivateActiveItem('active');
            item.classList.add('active');

            //toggle card flip
            card3D.classList.toggle('flip', item.dataset.item == 'coding');
            flipCard(item, 'coding');
        });
    });

    // find and deactivate elem
    const getActiveItem = className => document.querySelector(className);
    const deactivateActiveItem = activeClass => {
        const active = getActiveItem('.active');
        if (active) {
            active.classList.remove(activeClass);
        }
    };

    // add acrive class
    function addActiveClass(arr, className) {
        arr.forEach(img => {
            img.classList.add(className);
        });
    }

    // remove acrive class
    function removeActiveClass(arr, className) {
        arr.forEach(img => {
            img.classList.remove(className);
        });
    }

    function changeArrowDirection(e, elem) {
        e.preventDefault();
        elem.classList.toggle('arrow_active');
    }
}

export {flip3dCard};
