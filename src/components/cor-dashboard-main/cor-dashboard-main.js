import Component from '../component.js'
import Template from './template.js'

export default class CorDashboardMain extends Component {
   constructor() {
       super();
       this.innerHTML = Template.render();
       this.classList.add('one');
   }

   show(view, target) {
    this.innerHTML = Template.render(view, target);  
}

connectedCallback() {
    this.classList.add('two');

    const {root} = this.root;

    /* Filter update */
    const filter = "filter";
    const view = "view";
    const update = () => {
        this.show(root.getAttribute(view),root.getAttribute(filter))
    };

    new MutationObserver(update).observe(root, {
        attributes: true,
        attributeFilter: [view]
    });

}
}

if(!customElements.get('cor-dashboard-main')) {
   customElements.define('cor-dashboard-main', CorDashboardMain);
}