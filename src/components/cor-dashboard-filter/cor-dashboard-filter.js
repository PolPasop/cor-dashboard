const data = [
    {
        name: "Content Types",
        icon: "contenttypes",
        items: [
            {
                name: "News",
                target: "news",
                subitems: [
                    {
                    name: "Regional news"
                    },
                    {
                    name: "Press release"
                    },
                    {
                    name: "Success story"
                    }
                ]
            },
            {
            name: "Events",
            target: "events"
            },
            {
            name: "Opinions",
            target: ""
            },
            {
            name: "Studies",
            target: ""
            },
            {
            name: "Brochures",
            target: ""
            }
        ]
    },
    {
        name: "Themes",
        icon: "themes",
        items: [
            {
                name: "no theme",
                target: ""
            },
            {
                name: "Agriculture and Fisheries",
                target: ""
            },
            {
                name: "Citizenship, Governance and Institutional Affairs",
                target: ""
            },
            {
                name: "Cohesion Policy, Structural funds and EU Budget",
                target: ""
            },
            {
                name: "Consumer Policy, Health and Tourism",
                target: ""
            },
            {
                name: "Economic and monetary policy",
                target: ""
            },
            {
                name: "Environment, Climate Change and Energy",
                target: ""
            },
            {
                name: "Migration and External relations",
                target: ""
            },
            {
                name: "Research, Innovation and Digital Single Market",
                target: ""
            },
            {
                name: "Social Policy, Education, Employment and Culture",
                target: ""
            },
            {
                name: "Transport",
                target: ""
            }

        ]
    },
    {
        name: "Date",
        icon: "date",
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
        icon: "languages",
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
        this.menuTitle = this.querySelector('.cor-dashboard-filter__title');
        this.menu = this.querySelector('.cor-dashboard-filter__list');
    }

    connectedCallback() {
        this._collapse;
        this._triggers = this.querySelectorAll('[data-expandtarget]');
        this._triggers.forEach(trigger => {
            trigger.addEventListener('click', () => this._onClick(event)); 
        });
    }

    _toggleExpanded(target) {
        console.log(target);
        target.expanded = !target.expanded;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                expanded: this.expanded,
            },
            bubbles: true,
        }));
    }

    _calculateCollapsedScale() {
        const collapsed = this.menuTitle.getBoundingClientRect();
        const expanded = menu.getBoundingClientRect();
        return {
            x: collapsed.width / expanded.width,
            y: collapsed.height / expanded.height
        }
    }
    
    _onClick(event) {   
        this._toggleExpanded(event.target);
        this._calculateCollapsedScale();
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