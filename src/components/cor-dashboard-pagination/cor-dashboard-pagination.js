import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardPagination extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render(); 
    }
}

if (!customElements.get('cor-dashboard-pagination')) {
    customElements.define('cor-dashboard-pagination', CorDashboardPagination);
}