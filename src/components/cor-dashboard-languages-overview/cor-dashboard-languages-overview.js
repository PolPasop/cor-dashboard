/*
 * language overview used in the detailed card 
 */

import Component from '../component.js'
import Template from './template.js'

export default class CorDashboardLanguagesOverview extends Component {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = Template.render();
    }   
}

if(!customElements.get('cor-dashboard-languages-overview')) {
    customElements.define('cor-dashboard-languages-overview', CorDashboardLanguagesOverview);
}