import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardNav extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = Template.render();
  }

  set name(text) {
    const type = "change-name";
    this.dispatchUpdate({type, text});
  }

  

  connectedCallback() {
    this._triggers = this.querySelectorAll('[data-target]');
    this._triggers.forEach(
      trigger => trigger.addEventListener('click', e => this.onClick(e))
    );
  }

  show(target) {
    // console.log(`[category=${target}]`);
    // console.log(this.shadowRoot.querySelectorAll(`[category=${target.dataset.target}]`));
  }
  
  onClick(event) {
    // this.show(event.target.dataset.target);
    const type = "filter";
    const text = event.target.dataset.target;
    this.dispatchUpdate({type, text});
  }
  

  
}

if (!customElements.get('cor-dashboard-nav')) {
  customElements.define('cor-dashboard-nav', CorDashboardNav);
}


