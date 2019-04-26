import Component from '../component.js';
import Template from './template.js';

const filters = ["news", "no theme", "EN"];

export default class CorDashboardSelectedFilters extends Component {
    constructor() {
        super();
        // this.innerHTML = Template.render(filters);
    }

    connectedCallback() {
        const {root} = this.root;

        const filter = "filter";
        const update = () => {
            const filters = root.getAttribute(filter);
            this.innerHTML = Template.render([filters]);
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