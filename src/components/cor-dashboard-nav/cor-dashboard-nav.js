import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardNav extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.innerHTML = Template.render();
    this._resetTrigger = this.querySelector('.cor-dashboard__nav-link--home')
    this._resetTrigger.addEventListener("click", e => this.rootResetAttributes(e));

    document.querySelector('.cor-dashboard-slidebtn').addEventListener('click', event => this.clickOnButton());
  }

  clickOnButton() {
    document.querySelector('body').classList.toggle('is-collapsed');
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


