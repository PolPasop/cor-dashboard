/*
  The root component listens to dispatched actions and updates its
  properties based on action types. The objects, arrays, etc. assigned
  to these properties are the single source of truth and represent
  the global app state. The element's attributes are also updated so
  that components observing them can react to specific state changes.
  Global app state from @bdc
*/

import Component from '../component.js';
import Template from './template.js';


export default class CorDashboard extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = Template.render(this.globalData.DATA);
    this.addEventListener("state-update", this.store);
  }

  store({detail}) {
    console.log("in store");
    switch (detail.type) {
      case "change-name":
        console.log("in change name");
        this.update("user-name", detail.text);
        break;
      case "filter":
        console.log("in filter");
          this.update("filter", detail.text);
          break;
      case "remove-filter":
        console.log("in remove filter");
            this.remove("filter", detail.text);
            break;
      case "view":
        console.log("in view");
          this.update("view", detail.text);
          break;
    }
  }

  update(key, value) {
    console.log("in update", key, value);
    this[key] = value;
    let valuesOfAttribute = this.getAttribute(key);
    
    [valuesOfAttribute] = valuesOfAttribute.split(' ');

    if(!valuesOfAttribute.includes(value)) {
      this.setAttribute(key, valuesOfAttribute + ' ' + value);
    }

  }

  remove(key, value) {
    console.log("in remove", key, value);
    this[key] = value;
    let valuesOfAttribute = this.getAttribute(key);
    
    [valuesOfAttribute] = valuesOfAttribute.split(' ');

    
    valuesOfAttribute.filter(el => el !== value)

    this.setAttribute(key, valuesOfAttribute + ' ' + value);

  }

  connectedCallback() {
    
  }

}

if (!customElements.get('cor-dashboard')) {
  customElements.define('cor-dashboard', CorDashboard);
}