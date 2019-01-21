const data = [
    {
        name: "test"
    },
    {
        name: "test2"
    }
]

import Template from './template.js';

export default class CorDashboardFilter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open' });
        this.shadowRoot.innerHTML = Template.render(data);
    }

    connectedCallback() {
        console.log("The filter is ready");
    }
}

if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
}