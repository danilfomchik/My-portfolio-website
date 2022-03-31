export function scrollUp() {
    //scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up 
    const offset = 100,
        scrollUp = document.querySelector('.scroll-up'),
        scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
        pathLength = scrollUpSvgPath.getTotalLength()
    ;

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    //updateDashOffset
    const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;

        const dashoffset = pathLength - (getTop() * pathLength / height);
        scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    };

    //onscroll
    window.addEventListener('scroll', () => {
        updateDashoffset();

        if(getTop() > offset){
            scrollUp.classList.add('scroll-up--active');
        } else {
            scrollUp.classList.remove('scroll-up--active');
        }
    });
    
    //click
    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    //scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up scroll-up 
}