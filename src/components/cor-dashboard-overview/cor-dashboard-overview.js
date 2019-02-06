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
        this.shadowRoot.innerHTML = Template.render();
    }

    show(target) {
        console.log("show:", target);
        if(target) {
            
            console.log(this);
            // console.log(this.shadowRoot.querySelectorAll(`*([category=${target}])`));
            
            this.shadowRoot.querySelectorAll(`::sl*:not[category=${target}]`).forEach(
                el => el.classList.add('hidden')
            );
            this.shadowRoot.querySelectorAll(`*[category=${target}]`).forEach(
                el => el.classList.remove('hidden')
            );
        }
    }

    connectedCallback() {
        const {root} = this.root;
        const source = "filter";
        const update = () => {
            console.log("Name changed to", root[source]);
            this.show(root[source])
        };
    
        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [source]
        });

    }

}

if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
}