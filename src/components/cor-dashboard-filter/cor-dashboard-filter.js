const data = [
    {
        name: "Content Types",
        filterName: "contenttypes",
        icon: "contenttypes",
        expanded: true,
        items: [
            {
                name: "News",
                target: "news",
                number: 55,
                subitems: [
                    {
                    name: "Regional news",
                    number: 5
                    },
                    {
                    name: "Press release",
                    number: 0
                    },
                    {
                    name: "Success story",
                    number: 15
                    }
                ]
            },
            {
            name: "Events",
            target: "events",
            number: 25
            },
            {
            name: "Opinions",
            target: "opinions",
            number: 2
            },
            {
            name: "Studies",
            target: "studies",
            number: 9
            },
            {
            name: "Brochures",
            target: "brochures",
            number: 7
            }
        ]
    },
    {
        name: "Themes",
        filterName: "themes",
        icon: "themes",
        number: 125,
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
        filterName: "date",
        icon: "date",
        items: [
            {
                name: "Today",
                target: ""
            },
            {
                name: "This week",
                target: ""
            },
            {
                name: "This month",
                target: ""
            },
            {
                name: "This year",
                target: ""
            },
            {
                name: "Personalised",
                target: ""
            }          
        ]
    },
    {
        name: "Language",
        filterName: "languages",
        icon: "languages",
        items: [
            {
                name: "BG",
                target: ""
            },
            {
                name: "CS",
                target: ""
            },
            {
                name: "DA",
                target: ""
            },
            {
                name: "DE",
                target: ""
            },
            {
                name: "EL",
                target: ""
            },
            {
                name: "EN",
                target: ""
            },
            {
                name: "ES",
                target: ""
            },
            {
                name: "ET",
                target: ""
            },
            {
                name: "FI",
                target: ""
            },
            {
                name: "FR",
                target: ""
            },
            {
                name: "GA",
                target: ""
            },
            {
                name: "HR",
                target: ""
            },
            {
                name: "HU",
                target: ""
            },
            {
                name: "IT",
                target: ""
            },
            {
                name: "LT",
                target: ""
            },
            {
                name: "LV",
                target: ""
            },
            {
                name: "MT",
                target: ""
            },
            {
                name: "NL",
                target: ""
            },
            {
                name: "PL",
                target: ""
            },
            {
                name: "PT",
                target: ""
            },
            {
                name: "RO",
                target: ""
            },
            {
                name: "SK",
                target: ""
            },
            {
                name: "SL",
                target: ""
            },
            {
                name: "SV",
                target: ""
            },   
        ]
    }
]

import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardFilter extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = Template.render(data);
        
        // already expanded elements
        const collapsedElements = this.querySelectorAll('[aria-expanded=false]');
        collapsedElements.forEach(
            collapsedElement => {
                this.ExpandCollapse(collapsedElement.dataset.expandtarget);
            }
        );

        // filters events
        this._triggers = this.querySelectorAll('[data-filter]');
        this._triggers.forEach(
            trigger => trigger.addEventListener('click', e => this.onClick(e))
        );

        // open close events
        this._expandTriggers = this.querySelectorAll('[data-expandtarget]');
        this._expandTriggers.forEach(
            trigger => trigger.addEventListener('click', e => this.ExpandCollapse(event.target.dataset.expandtarget))
        );

        // dates events
        this._dateTriggers = this.querySelectorAll('.cor-dashboard-filter__list cor-dashboard-filter__list--date [data-filter]');
        this._dateTriggers.forEach(
            trigger => trigger.addEventListener('click', e => this.dateUpdate(e))
        );
    }

    onClick(event) {
        const text = event.target.dataset.filter;
        

        if (event.target.classList.contains('active')) {
            const type = "remove-filter";
            console.log(event.target, "list", event.target.classList.contains('active'));
            event.target.classList.remove('active');
            this.dispatchUpdate({type, text});
        } else {
            const type = "filter";
            event.target.classList.add('active');
            
            if (event.target.nextElementSibling) {
                const children = event.target.nextElementSibling.querySelectorAll('.cor-dashboard-filter__list__item__sublink');
                children.forEach(
                    child =>  child.classList.add('active')
                );
            }
            
            this.dispatchUpdate({type, text});
        };
    }

    ExpandCollapse(target) {
        const expandCollapseTarget = document.querySelector(`#${target}`);
        const parent = expandCollapseTarget.parentNode;


        if(!parent.classList.contains("js-collapsed")) {
            this.collapse(expandCollapseTarget);
            parent.classList.add('js-collapsed');
        } else {
            this.expand(expandCollapseTarget)
            parent.classList.remove('js-collapsed');
        }
    }

    expand(target) {
        target.style.height = "";
        this._collapsed = false;
    }

    collapse(target) {
        target.style.height = 0;
        this._collapsed = true;
    }

    dateUpdate() {
        
    }

}

if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
}