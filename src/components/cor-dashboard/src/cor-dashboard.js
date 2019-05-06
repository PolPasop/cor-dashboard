/*
  The root component listens to dispatched actions and updates its
  properties based on action types. The objects, arrays, etc. assigned
  to these properties are the single source of truth and represent
  the global app state. The element's attributes are also updated so
  that components observing them can react to specific state changes.
  Global app state from @bdc
*/

import Component from '../../component.js';
import Template from '../template.js';


export default class CorDashboard extends Component {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = Template.render(this.globalData.DATA);
    this.addEventListener("state-update", this.store);
  }

  store({detail}) {
    console.log("in store", detail);
    switch (detail.type) {
      case "change-name":
        console.log("in change name");
        this.update("user-name", detail.text);
        break;
      case "filter":
        console.log("in filter");
          this.updateFilter("filter", detail.text);
          break;
      case "remove-filter":
        console.log("in remove filter");
            this.remove("filter", detail.text);
            break;
      case "view":
        console.log("in view");
          this.updateView("view", detail.text);
          break;
      case "reset":
        console.log("in reset state");
        this.setAttribute("view", "");
        this.setAttribute("filter", "");
    }
  }

  updateView(key, value) {
    if(this[key]){
      this[key] = value;
    } else {
      this.setAttribute(key, value);
    }
  }

  updateFilter(key, value) {
    console.log("in update", "key=", key, "value=", value);
    /*
    if(this[key]){
      this[key] = value;
    } else {
      this.setAttribute(key, value);
    }
    */

    // Check if attribute exists
    let valuesOfAttribute = this.getAttribute(key);
    
    if(valuesOfAttribute) {
      // Get an array of values
      valuesOfAttribute = valuesOfAttribute.split(' ');

      // Add the new value if it doesn't exist
      if(!valuesOfAttribute.includes(value)) {
        const newListOfVAlues = valuesOfAttribute.join(' ') + ' ' + value
        this.setAttribute(key, newListOfVAlues);
      }
    } 

    

  }

  remove(key, value) {
    console.log("in remove", key, value);
    this[key] = value;
    let valuesOfAttribute = this.getAttribute(key);
    
    valuesOfAttribute = valuesOfAttribute.split(' ');

    
    valuesOfAttribute = valuesOfAttribute.filter(el => el !== value);

    this.setAttribute(key, valuesOfAttribute.join(' '));

  }

  connectedCallback() {
    
  }

}

if (!customElements.get('cor-dashboard')) {
  customElements.define('cor-dashboard', CorDashboard);
}