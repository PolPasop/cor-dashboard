import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardOverview extends Component {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render();
    }

    connectedCallback() {
        const {root} = this;
        const source = "user-name";
        const update = () => console.log("Name changed to", root[source]);
    
        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [source]
        });
    }
}

if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
}