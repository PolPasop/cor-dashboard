import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardDetailed extends Component {
    constructor() {
        super();
        this.shadowRoot.innerHTML = Template.render(this.globalData.ITEMS);
    }
}

if(!customElements.get('cor-dashboard-detailed')) {
    customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
}