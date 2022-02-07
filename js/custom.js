const card3D = document.querySelector('.card-3d-container');
const checkItem = document.querySelectorAll('.services__check-item');

const cardFrontImg = document.querySelectorAll('.card-front__img');
const cardBackImg = document.querySelectorAll('.card-back__img');

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
        deactivateActiveItem();
        item.classList.add('active');

        card3D.classList.toggle('flip', item.dataset.item == 'camping');
        flipCard(item, 'camping');
        
    });

});