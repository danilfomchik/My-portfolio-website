import {gsap} from 'gsap';

function shakeTools() {
    const btn = document.getElementById('btn');
    const btnBkg = document.getElementById('btn-bkg');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const btnShadow = document.getElementById('btn-shadow');
    const dur = 0.3;
    const white = '#D1D9DF';
    const black = '#090909';
    const red = '#FC0502';
    const stagger = '-=0.3';
    let playAni = false;

    // Button setup
    gsap.set(btnBkg, {
        backgroundColor: white,
        borderBottom: `5px solid ${red}`,
    });
    gsap.set(btnText, {
        xPercent: 10,
        yPercent: 100,
    });
    gsap.set(btnIcon, {
        xPercent: 400,
        yPercent: 620,
        opacity: 0,
    });
    gsap.set(btnShadow, {
        xPercent: 20,
        yPercent: 20,
        scale: 1,
    });

    // Setup timelines
    let icons_tl = gsap.timeline({
        defaults: {
            duration: 0.4,
            ease: 'back.out',
        },
    });
    let main_tl = gsap.timeline();

    // Shake animation
    const shake = () => {
        gsap.to(btn, 0.5, {
            keyframes: {
                rotateZ: ['-3', '3', '-3', '3', '-3', '3', '-3', '3', '-3', '3', '0'],
            },
        });
    };

    // Icons spreading animation
    const video = document.querySelector('.video__wrapper');

    let jsX = -140,
        jsY = -160,
        gitX = -200,
        gitY = 40,
        gulpX = -90,
        gulpY = 180,
        psX = 120,
        psY = 160,
        sassX = 200,
        sassY = -50,
        vsX = 90,
        vsY = -180;

    video.addEventListener('click', e => {
        e.preventDefault();
    });

    icons_tl
        .to('#js', {
            x: jsX,
            y: jsY,
            rotate: 10,
        })
        .to(
            '#git',
            {
                x: gitX,
                y: gitY,
                rotate: -20,
            },
            stagger,
        )
        .to(
            '#gulp',
            {
                x: gulpX,
                y: gulpY,
                rotate: 10,
            },
            stagger,
        )
        .to(
            '#photoshop',
            {
                x: psX,
                y: psY,
                rotate: -20,
            },
            stagger,
        )
        .to(
            '#sass',
            {
                x: sassX,
                y: sassY,
                rotate: 20,
            },
            stagger,
        )
        .to(
            '#vs-code',
            {
                x: vsX,
                y: vsY,
                rotate: -10,
            },
            stagger,
        );
    icons_tl.pause();

    btn.addEventListener('mousedown', () => {
        playAni = !playAni;

        if (playAni) {
            main_tl
                .to(btnBkg, dur, {
                    scale: 1.3,
                    backgroundColor: black,
                    borderBottom: `5px solid ${black}`,
                })
                .to(
                    btnShadow,
                    dur,
                    {
                        xPercent: -40,
                        yPercent: 60,
                        scale: 1.7,
                    },
                    '<',
                )
                .to(
                    btnText,
                    dur,
                    {
                        xPercent: 10 - 20,
                        yPercent: 120 + 20,
                        color: white,
                    },
                    '<',
                )
                .to(
                    btnIcon,
                    dur,
                    {
                        xPercent: 280,
                        yPercent: 620,
                        keyframes: {
                            opacity: [0, 0, 1],
                        },
                        delay: 0.2,
                    },
                    '<',
                )
                .add(shake)
                .add(icons_tl.play());
        } else {
            main_tl

                .to(btnIcon, dur, {
                    xPercent: 400,
                    yPercent: 620,
                    keyframes: {
                        opacity: [1, 0, 0],
                    },
                })
                .add(icons_tl.reverse())
                .to(
                    btnBkg,
                    dur,
                    {
                        scale: 1,
                        backgroundColor: white,
                        borderBottom: `5px solid ${red}`,
                    },
                    '-=0.3',
                )
                .to(
                    btnShadow,
                    dur,
                    {
                        xPercent: 20,
                        yPercent: 20,
                        scale: 1,
                    },
                    '-=0.3',
                )
                .to(
                    btnText,
                    dur,
                    {
                        xPercent: 10,
                        yPercent: 100,
                        color: black,
                    },
                    '<',
                );
        }
    });
}

export {shakeTools};
