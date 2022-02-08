window.addEventListener('DOMContentLoaded', () => {
    const card3D = document.querySelector('.card-3d-container');
    const checkItem = document.querySelectorAll('.services__check-item');

    const cardFrontImg = document.querySelectorAll('.card-front__img');
    const cardBackImg = document.querySelectorAll('.card-back__img');

    const arrow = document.querySelector('.arrow');

    // find and deactivate elem
    const getActiveItem = () => document.querySelector('.active');
    const deactivateActiveItem = () => {
        const active = getActiveItem();
        if(active){
            active.classList.remove('active')
        }
    }

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


    // adding classes for img
    function flipCard(clickingElem, checkedElem) {

        if(clickingElem.dataset.item == checkedElem){

            addActiveClass(cardFrontImg, 'passiveImg');
            addActiveClass(cardBackImg, 'activeImg');
        } else{

            removeActiveClass(cardFrontImg, 'passiveImg')
            removeActiveClass(cardBackImg, 'activeImg')
        }

    }


    // flip card by clicking 
    checkItem.forEach(item => {

        item.addEventListener('click', (e) => {
            changeArrowDirection(e, arrow);

            deactivateActiveItem();
            item.classList.add('active');

            card3D.classList.toggle('flip', item.dataset.item == 'coding');
            flipCard(item, 'coding');
            
        });

    });

    //change arrow direcrion
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
    });
    function changeArrowDirection(e, elem) {
        e.preventDefault();
        elem.classList.toggle('arrow_active');
    }
});