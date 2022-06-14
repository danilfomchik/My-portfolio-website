function cursor() {
    const body = document.querySelector('body');
    //cursor
        const cursor = document.getElementById('cursor'),
        follower = document.getElementById('aura'),
        documentLinks = document.querySelectorAll('a'),
        formBtns = document.querySelectorAll('.form-button')
    ;

    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    function mouseCoords(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

    }

    body.addEventListener('mousemove', (e) => {
        mouseCoords(e);

        cursor.classList.remove('hidden');
        follower.classList.remove('hidden');
    });

    gsap.to({}, .01, {

        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })
        }

    });

    // documentLinks.forEach(link => {
    //     link.addEventListener('mouseover', () => {
    //         cursor.classList.add('activeCursor');
    //         follower.classList.add('activeCursor');
    //     });

    //     link.addEventListener('mouseout', () => {
    //         cursor.classList.remove('activeCursor');
    //         follower.classList.remove('activeCursor');
    //     });
    // });

    function linksHover(selector) {
        selector.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('activeCursor');
                follower.classList.add('activeCursor');
            });
    
            link.addEventListener('mouseout', () => {
                cursor.classList.remove('activeCursor');
                follower.classList.remove('activeCursor');
            });
        });
    }

    linksHover(documentLinks);
    linksHover(formBtns);

    body.addEventListener('mouseout', (e) => {
        cursor.classList.add('hidden');
        follower.classList.add('hidden');
    });
    //cursor
}

export { cursor };