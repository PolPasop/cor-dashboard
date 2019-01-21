import Template from './template.js';

export default class CorDashboardSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }
}

if (!customElements.get('cor-dashboard-sidebar')) {
  customElements.define('cor-dashboard-sidebar', CorDashboardSidebar);
}