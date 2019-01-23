import Component from '../component.js';
import Template from './template.js';

export default class CorDashboard extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
    this.addEventListener("state-update", this.store);
  }

  store({detail}) {
    switch (detail.type) {
      case "change-name":
        this.update("user-name", detail.text);
        break;
    }
  }

  update(key, value) {
    this[key] = value;
    this.setAttribute(key, value);
  }

  connectedCallback() {
    console.log("The Cor Dashboard is there")
  }
}

if (!customElements.get('cor-dashboard')) {
  customElements.define('cor-dashboard', CorDashboard);
}