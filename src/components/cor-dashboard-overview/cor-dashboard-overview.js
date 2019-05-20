/*
    This component observes the state changes. Whenever a specific attribute
    is updated, it changes the displays
*/

import Component from '../component.js';
import Template from './template.js';



export default class CorDashboardOverview extends Component {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.innerHTML = Template.render(this.globalData.DATA);
    }

    show(filter) {
        if (filter === "") {
            this.innerHTML = Template.render(this.globalData.DATA);
        } else {
            this.innerHTML = Template.render(this.globalData.DATA.filter( el => el.category === filter));
        }
    }

    connectedCallback() {
        const {root} = this.root;

        /* Filter update */
        const filter = "filter";
        const update = () => {
            this.show(root[filter]);
        };

        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [filter]
        });
    }

}

if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
}