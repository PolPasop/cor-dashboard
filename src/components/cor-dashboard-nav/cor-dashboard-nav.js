import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardNav extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = Template.render();
  }

  connectedCallback() {
   
  }


  
}

if (!customElements.get('cor-dashboard-nav')) {
  customElements.define('cor-dashboard-nav', CorDashboardNav);
}


