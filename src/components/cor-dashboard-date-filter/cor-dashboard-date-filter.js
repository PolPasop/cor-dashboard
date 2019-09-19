import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardDateFilter extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render();
    }
}

if(!customElements.get('cor-dashboard-date-filter')) {
    customElements.define('cor-dashboard-date-filter', CorDashboardDateFilter);
}