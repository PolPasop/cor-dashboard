import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardSelectedFilters extends Component {
    constructor() {
        super();
    }

    updateRoot(element) {
        
        const text = element.parentNode.dataset.selectedfilter;
        const type = "remove-filter";
        
        this.dispatchUpdate({type, text});
        
    }

    connectedCallback() {
        const {root} = this.root;
        const filter = "filter"
        const update = () => {
            
            const filters = root.getAttribute("filter");
            this.innerHTML = Template.render(filters.split(' '));
            const filterBtns = document.querySelectorAll('.cor-dashboard-selected-filters svg');
            [...filterBtns].map( filterBtn => filterBtn.addEventListener('click', event => this.updateRoot(event.target)));
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