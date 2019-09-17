import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardDateBtn extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render();
    }
}

if (!customElements.get('cor-dashboard-date-btn')) {
    customElements.define('cor-dashboard-date-btn', CorDashboardDateBtn);
}