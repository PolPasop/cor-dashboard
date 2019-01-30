import Component from '../component.js'
import Template from './template.js'

export default class CorDashboardCardDetailed extends Component {
    constructo() {
        super();
        this.shadowRoot.innerHTML = Template.render();
    }

}

if (!customElements.get('cor-dashboard-card-detailed')) {
    customElements.define('cor-dashboard-card-detailed', CorDashboardCardDetailed);
}