import {getCardData} from '../services/services.js';
import {cursor} from './cursor.js';

function renderPortfolio() {
    const cardsContainer = document.querySelector('.projects__inner');

    class PortfolioCards {
        constructor(link, title, background) {
            this.link = link;
            this.title = title;
            this.background = background;
        }

        renderCards() {
            let card = `
                <div class='projects-item'>
                    <div class="imgWrapper">
                        <img src=${this.background} alt=${this.title}>
                        <a target="_blanck" href=${this.link} class="projectButton">Show project</a>
                    </div>
                    <h3>${this.title}</h3>
                </div>
            `;

            cardsContainer.innerHTML += card;
        }
    }

    getCardData('https://my-portfolio-website-api.vercel.app/portfolioCards').then(data => {
        data.forEach(card => {
            new PortfolioCards(card.link, card.title, card.background, 'projects-item').renderCards();
        });

        projectHover('mouseover');
        projectHover('mouseout');

        cursor();
    });

    //hover card
    function projectHover(action) {
        const imgWrapper = document.querySelectorAll('.imgWrapper');

        imgWrapper.forEach(wrapper => {
            wrapper.addEventListener(action, () => {
                wrapper.classList.toggle('activeProject');
            });
        });
    }
}

export {renderPortfolio};
