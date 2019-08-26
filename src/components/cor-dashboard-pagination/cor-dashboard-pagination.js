import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardPagination extends Component {
    constructor() {
        super();
        

    }

    connectedCallback() {
        const articles = document.querySelectorAll('.cor-dashboard-detailed-item');

        let currentPage = 1;
        const totalItems = [...articles].length;
        const itemsPerPage = 2;

        

        [...articles].map( article => {
            article.classList.add('cor-dashboard-lazy-load__element')
        });
        
        this.innerHTML = Template.render(Math.floor(totalItems / itemsPerPage));
    }
}

if (!customElements.get('cor-dashboard-pagination')) {
    customElements.define('cor-dashboard-pagination', CorDashboardPagination);
}