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
    }
}

if(!customElements.get('cor-dashboard-detailed')) {
    customElements.define('cor-dashboard-detailed', CorDashboardDetailed);
}