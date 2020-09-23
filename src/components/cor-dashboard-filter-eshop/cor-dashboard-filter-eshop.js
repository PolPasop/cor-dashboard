const data = [
    {
        name: "Content Types",
        filterName: "eshopcontenttypes",
        icon: "contenttypes",
        expanded: false,
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
        filterName: "eshopthemes",
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
        name: "Language",
        filterName: "eshoplanguages",
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

export default class CorDashboardFilterEshop extends Component {
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
       
        if(event.target.parentNode.parentNode.classList.contains('cor-dashboard-filter__list--date')) {
            this.dateUpdate(event.target);
        } else {
            this.updateActiveState(event.target);
        }
    }

    updateActiveState(target) {
        const text = target.dataset.filter;

        if (target.classList.contains('active')) {
            const type = "remove-filter";
            console.log(target, "list", target.classList.contains('active'));
            target.classList.remove('active');
            this.dispatchUpdate({type, text});
        } else {
            const type = "filter";
            target.classList.add('active');
            
            if (target.nextElementSibling) {
                const children = target.nextElementSibling.querySelectorAll('.cor-dashboard-filter__list__item__sublink');
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

    dateUpdate(event) {

        const currentDate = new Date;
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1) ).slice(-2);
        let startDate = '';
        let endDate = '';
        

        switch (event.dataset.filter) {
            
            
            case "today":
                startDate = currentDate.toISOString().substr(0, 10);
                endDate = currentDate.toISOString().substr(0, 10);
                break;
            case "thisweek":   
                let firstDayOfTheWeek = (currentDate.getDate() -  currentDate.getDay() ) + 1;
                let lastDayOfTheWeek = firstDayOfTheWeek + 4;

                startDate = `${currentYear}-${currentMonth}-${('0' + firstDayOfTheWeek).slice(-2)}`;
                endDate = `${currentYear}-${currentMonth}-${('0' + lastDayOfTheWeek).slice(-2)}`;
                break;
            case "thismonth":
                const lastDayOfTheMonth = new Date(currentYear, currentMonth, 0);
                
                startDate = `${currentYear}-${currentMonth}-01`;
                endDate = `${currentYear}-${currentMonth}-${lastDayOfTheMonth.getDate()}`;
                break;
            case "thisyear":
                
                startDate = `${currentYear}-01-01`;
                endDate = `${currentYear}-12-31`;
                break;
            case "custom":

                break;
            default:
                break;
        }

        const startDateInput = document.querySelector('input#start');
        const endDateInput = document.querySelector('input#end');
        startDateInput.value = startDate;
        endDateInput.value = endDate;
    }

}

if (!customElements.get('cor-dashboard-filter-eshop')) {
    customElements.define('cor-dashboard-filter-eshop', CorDashboardFilterEshop);
}