import Component from '../component.js';
import Template from './template.js';


export default class CorDashboardCard extends Component {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render();
    }

    connectedCallback() {

    }
}

if (!customElements.get('cor-dashboard-card')) {
    customElements.define('cor-dashboard-card', CorDashboardCard);
}

