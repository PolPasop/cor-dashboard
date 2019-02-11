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
        this.shadowRoot.innerHTML = Template.render(this.globalData.DATA);
    }

   

    show(view, target) {
        
        /*
        console.log(`filter ${target}`, this.globalData.DATA.filter( el => el.category === target));
        console.log("show:", target);
        */
        


        /*
        if(view & target) {
            this.shadowRoot.innerHTML = Template.render(this.globalData.ITEMS);
        };
        */

        if(target) {
            this.shadowRoot.innerHTML = Template.render(this.globalData.DATA.filter( el => el.category === target));
        } else {
            this.shadowRoot.innerHTML = Template.render(this.globalData.DATA);
        }
    }

    connectedCallback() {
        const {root} = this.root;

        /* Filter update */
        const filter = "filter";
        const view = "view";
        const update = () => {
            console.log("Name changed to", "view: ", root[view], "filter:", root[filter]);
            this.show(root[view],root[filter])
        };
    
        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [filter, view]
        });

    }

}

if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
}