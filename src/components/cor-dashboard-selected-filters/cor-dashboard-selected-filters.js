import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardSelectedFilters extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        const {root} = this.root;
        const update = () => {
            
            const filters = root.getAttribute("filter");
            console.log("filters:",filters);
            this.innerHTML = Template.render(filters);
        };

        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [filter]
        });
    }

}

if (!customElements.get('cor-dashboard-selected-filters')) {
    customElements.define('cor-dashboard-selected-filters', CorDashboardSelectedFilters);
}