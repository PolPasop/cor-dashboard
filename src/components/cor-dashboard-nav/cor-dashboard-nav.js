import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardNav extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = Template.render();
  }

  connectedCallback() {
    this._resetTrigger = this.querySelector('.cor-dashboard__nav-link--home')
    this._resetTrigger.addEventListener("click", e => this.rootResetAttributes(e));
  }

  rootResetAttributes() {
    const type = "reset";
    const text = "";
    this.dispatchUpdate({type, text});
  }
  
}

if (!customElements.get('cor-dashboard-nav')) {
  customElements.define('cor-dashboard-nav', CorDashboardNav);
}


