// import gsap from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    const card3D = document.querySelector('.card-3d-container');
    const checkItem = document.querySelectorAll('.services__check-item');

    const cardFrontImg = document.querySelectorAll('.card-front__img');
    const cardBackImg = document.querySelectorAll('.card-back__img');

    const arrow = document.querySelector('.fa-play');
    const body = document.querySelector('body');

    const burgerMenu = document.querySelector('.menu-btn');

    // find and deactivate elem
    const getActiveItem = (className) => document.querySelector(className);
    const deactivateActiveItem = (activeClass) => {
        const active = getActiveItem('.active');
        if(active){
            active.classList.remove(activeClass);
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

    //change arrow direcrion
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
    });

    function changeArrowDirection(e, elem) {
        e.preventDefault();
        elem.classList.toggle('arrow_active');
    }
    
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

    //burger menu
    burgerMenu.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.toggle('menu-btn_active');
    });
});