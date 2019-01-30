import Component from '../component.js'
import Template from './template.js'

export default class CorDashboardDetailedItem extends Component {
    constructor() {
        super();
        this.shadowRoot.innerHTML = Template.render();
    }
}

if(!customElements.get('cor-dashboard-detailed-item')) {
    customElements.define('cor-dashboard-detailed-item', CorDashboardDetailedItem);
}