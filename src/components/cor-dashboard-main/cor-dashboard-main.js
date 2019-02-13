import Component from '../component.js'
import Template from './template.js'

export default class CorDashboardMain extends Component {
   constructor() {
       super();
       this.innerHTML = Template.render();
   }

   show(view, target) {
    console.log("view:",view,"target:",target);
    /*
    console.log(`filter ${target}`, this.globalData.DATA.filter( el => el.category === target));
    console.log("show:", target);
    */
    
    // 
    if(view === "detailed") {
        this.innerHTML = `<cor-dashboard-detailed></cor-dashboard-detailed>`;
        return false;
    } else {
        this.innerHTML = Template.render(this.globalData.DATA);
    }

    /*
    if(view & target) {
        this.shadowRoot.innerHTML = Template.render(this.globalData.ITEMS);
    };
    */

    /*
    if(target) {
        this.innerHTML = Template.render(this.globalData.DATA.filter( el => el.category === target));
    } else {
        this.innerHTML = Template.render(this.globalData.DATA);
    }
    */
    
}

connectedCallback() {
    const {root} = this.root;

    /* Filter update */
    const filter = "filter";
    const view = "view";
    const update = () => {
        console.log("Name changed to", "view: ", root[view], "filter:", root[filter]);
        this.show(root[view],root[filter])
    };

    new MutationObserver(update).observe(root, {
        attributes: true,
        attributeFilter: [filter, view]
    });

}
}

if(!customElements.get('cor-dashboard-main')) {
   customElements.define('cor-dashboard-main', CorDashboardMain);
}