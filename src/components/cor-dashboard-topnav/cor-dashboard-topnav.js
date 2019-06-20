import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardTopnav extends Component {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render();
        this._triggers = this.querySelectorAll('[data-view]');
        this._triggers.forEach(
            trigger => trigger.addEventListener('click', e => this.onClick(e))
        );
    }

    onClick(event) {
        document.querySelector('[data-view].active').classList.remove('active');
        event.target.classList.add('active');
        const type = "view";
        const text = event.target.dataset.view;
        this.dispatchUpdate({ type, text});
    }

}

if(!customElements.get('cor-dashboard-topnav')) {
    customElements.define('cor-dashboard-topnav', CorDashboardTopnav);
}