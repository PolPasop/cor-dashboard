import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardTopnav extends Component {
    constructor () {
        super();
        this.shadowRoot.innerHTML = Template.render();
    }

    connectedCallback() {
        this._triggers = this.shadowRoot.querySelectorAll('[data-view]');
        this._triggers.forEach(
            trigger => trigger.addEventListener('click', e => this.onClick(e))
        );
    }

    onClick(event) {
        const type = "view";
        const text = event.target.dataset.view;
        this.dispatchUpdate({ type, text});
    }

}

if(!customElements.get('cor-dashboard-topnav')) {
    customElements.define('cor-dashboard-topnav', CorDashboardTopnav);
}