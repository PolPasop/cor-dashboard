const data = [
    {
        name: "Content Types",
        filterName: "contenttype",
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
            target: "opinions"
            },
            {
            name: "Studies",
            target: "studies"
            },
            {
            name: "Brochures",
            target: "brochures"
            }
        ]
    },
    {
        name: "Themes",
        filterName: "themes",
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
        this.innerHTML = Template.render(data);
                
    }

    connectedCallback() {
        this._triggers = this.querySelectorAll('[data-filter]');
        this._triggers.forEach(
            trigger => trigger.addEventListener('click', e => this.onClick(e))
        );
    }  
    
    onClick(event) {
        // this.show(event.target.dataset.target);
        const text = event.target.dataset.filter;

        if (event.target.classList.contains('active')) {
            const type = "remove-filter";
            event.target.classList.remove('active');
            this.dispatchUpdate({type, text});
        } else {
            const type = "filter";
            event.target.classList.add('active');
            this.dispatchUpdate({type, text});
        };
      }

}

if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
}