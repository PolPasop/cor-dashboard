import Template from './template.js';

export default class CorDashboardNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }

  connectedCallback() {
    console.log("The Cor Dashboard Nav is there")
  }
}

if (!customElements.get('cor-dashboard-nav')) {
  customElements.define('cor-dashboard-nav', CorDashboardNav);
}


