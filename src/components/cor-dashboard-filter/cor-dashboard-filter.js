const data = [
    {
        name: "Themes",
        items: [
            "no theme",
            "Agriculture and Fisheries",
            "Citizenship, Governance and Institutional Affairs",
            "Cohesion Policy, Structural funds and EU Budget",
            "Consumer Policy, Health and Tourism",
            "Economic and monetary policy",
            "Environment, Climate Change and Energy",
            "Migration and External relations",
            "Research, Innovation and Digital Single Market",
            "Social Policy, Education, Employment and Culture",
            "Transport"
        ]
    },
    {
        name: "Date",
        items: [
            "Today",
            "This week",
            "This month",
            "This year",
            "Personalised"
        ]
    },
    {
        name: "Language",
        items: [
            "BG",
            "CS",
            "DA",
            "DE",
            "EL",
            "EN",
            "ES",
            "ET",
            "FI",
            "FR",
            "GA",
            "HR",
            "HU",
            "IT",
            "LT",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SK",
            "SL",
            "SV"
        ]
    }
]

import Template from './template.js';

export default class CorDashboardFilter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = Template.render(data);
    }

    connectedCallback() {
        this._collapse;
        this._trigger = this.querySelector('[data-target]');
        if (!this._trigger)
            return;
        this._target = this.querySelector(`${this._trigger.dataset.target}`);
        if (!this._target)
            return;
        this._trigger.addEventListener('click', this._onClick);
    }

    _toggleExpanded(target) {
        
        target.expanded = !target.expanded;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                expanded: this.expanded,
            },
            bubbles: true,
        }));
    }
    
    _onClick(event) {
        console.log("clickkk");
        console.log(this);
        this._toggleExpanded(event.target)
    }
    
    

    get expanded() {
        return this.hasAttribute('expanded');
    }

    set expanded(value) {
        const isExpanded = Boolean(value);
        if (isExpanded)
          this.setAttribute('expanded', '');
        else
          this.removeAttribute('expanded');
      }

      attributeChangedCallback(name, oldValue, newValue) {
        const hasValue = newValue !== null;
        this.setAttribute('aria-checked', hasValue);
      }
}

if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
}