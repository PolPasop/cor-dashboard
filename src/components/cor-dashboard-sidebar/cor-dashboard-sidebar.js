import Template from './template.js';

export default class CorDashboardSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }

  connectedCallback() {
    console.log("The Cor Dashboard Sidebar is there")
  }
}

if (!customElements.get('cor-dashboard-sidebar')) {
  customElements.define('cor-dashboard-sidebar', CorDashboardSidebar);
}


