// import gsap from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    const card3D = document.querySelector('.card-3d-container');
    const checkItem = document.querySelectorAll('.services__check-item');

    const cardFrontImg = document.querySelectorAll('.card-front__img');
    const cardBackImg = document.querySelectorAll('.card-back__img');

    const arrow = document.querySelector('.fa-play');
    const body = document.querySelector('body');

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
    // //cursor
    // const cursor = document.getElementById('cursor'),
    //     follower = document.getElementById('aura')
    //     links = document.querySelectorAll('a')
    // ;
    // let cx = window.innerWidth / 2,
    //     cy = window.innerHeight / 2,
    //     clientX,
    //     clientY
    // ;

    // let mouseX = 0, 
    //     mouseY = 0, 
    //     posX = 0, 
    //     posY = 0
    // ;

    // function mouseCoords(e) {
    //     mouseX = e.pageX;
    //     mouseY = e.PageY;
    // }

    // gsap.to({}, .01, {
    //     repeat: -1,

    //     onRepeat: () => {
    //         posX += (mouseX - posX) / 5;
    //         posY += (mouseY - posY) / 5;

    //         gsap.set(cursor, {
    //             css: {
    //                 left: mouseX,
    //                 top: mouseY
    //             }
    //         });

    //         gsap.set(follower, {
	// 			css: {
	// 				left: posX - 24,
	// 				top: posY - 24
	// 			}
	// 		});
    //     }
    // });

    // body.addEventListener('mousemove', e => {
    //     clientX = e.pageX,
    //     clientY = e.pageY
        
    //     let request = requestAnimationFrame(updateMe);

    //     mouseCoords(e);
    //     cursor.classList.remove('hidden')
	// 	follower.classList.remove('hidden')
    // });

    // for(let i = 0; i < links.length; i++) {

	// 	links[i].addEventListener('mouseover', () => {
	// 		cursor.classList.add('active')
	// 		follower.classList.add('active')
	// 	})

	// 	links[i].addEventListener('mouseout', () => {
	// 		cursor.classList.remove('active')
	// 		follower.classList.remove('active')
	// 	})

	// }

	// body.addEventListener('mouseout', () => {
	// 	cursor.classList.add('hidden')
	// 	follower.classList.add('hidden')
	// })

    // function updateMe() {
    //     let dx = clientX - cx,
    //         dy = clientY - cy,
    //         tiltx = dy / cy,
    //         tilty = dx / cx,
    //         radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
    //         degree = radius * 12
    //     ;
        
    //     gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
    // }
});