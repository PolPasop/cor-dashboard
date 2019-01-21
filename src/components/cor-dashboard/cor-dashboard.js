import Template from './template.js';

export default class CorDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }

  connectedCallback() {
    console.log("The Cor Dashboard is there")
  }
}

if (!customElements.get('cor-dashboard')) {
  customElements.define('cor-dashboard', CorDashboard);
}