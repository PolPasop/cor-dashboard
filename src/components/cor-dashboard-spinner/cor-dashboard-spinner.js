import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardSpinner extends Component {
    constructor() {
        super();
        console.log('SPINN !!')
    }

    connectedCallback() {
        const stroke = this.getAttribute('stroke');
        const radius = this.getAttribute('radius');
        const normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;

        this.innerHTML = Template.render(stroke, radius, this._circumference, normalizedRadius);

    }

}

if (!customElements.get('cor-dashboard-spinner')) {
    customElements.define('cor-dashboard-spinner', CorDashboardSpinner);
}