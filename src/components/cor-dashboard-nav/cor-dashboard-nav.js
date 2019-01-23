import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardNav extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }

  set name(text) {
    const type = "change-name";
    this.dispatchUpdate({type, text});
  }

  /*

  connectedCallback() {
    console.log("The Cor Dashboard Nav is there")
    this._triggers = this.shadowRoot.querySelectorAll('[data-target]');
    this._triggers.forEach(
      trigger => trigger.addEventListener('click', e => this.show(e))
    );
    console.log("triggers:",this._triggers);
  }

  show(target) {
    console.log(`[category=${target}]`);
    console.log(this.shadowRoot.querySelectorAll(`[category=${target.dataset.target}]`));
  }
  
  onClick(event) {
    this.show(event.target.dataset.target)
  }
  */

  
}

if (!customElements.get('cor-dashboard-nav')) {
  customElements.define('cor-dashboard-nav', CorDashboardNav);
}


