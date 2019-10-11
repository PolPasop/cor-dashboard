import Component from '../component.js';
import Template from './template.js';
import CorDashboardLazyLoading from '../cor-dashboard-lazy-loading/cor-dashboard-lazy-loading.js';

export default class CorDashboardDetailed extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render(this.globalData.ITEMS);
        CorDashboardLazyLoading();

        const languagesLinks = document.querySelectorAll('.cor-dashboard-detailed-item__languages-list__item > a');
        [...languagesLinks].map( languageLink => {
            languageLink.addEventListener('click', evt => this.onClick(evt.target))
        })   
    }

    onClick(el) {
        this.switchContent(el.closest('.cor-dashboard-detailed-item'),el.dataset.lang)
    }

    switchContent(content,newLang) {
        
        const flippedEl = content.querySelector('.flip');
        if (flippedEl) flippedEl.classList.remove('flip');

        [...content.querySelectorAll('.cor-dashboard-detailed-item__content')].map( translation => {

            if (translation.dataset.lang === newLang) {
                console.log(translation.dataset.lang , newLang)
                translation.classList.add('flip');
            }
        });
        event.preventDefault;
    }
}

if(!customElements.get('cor-dashboard-detailed')) {
    customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
}