/*
    This component observes the state changes. Whenever a specific attribute
    is updated, it changes the displays
*/

import Component from '../component.js';
import Template from './template.js';

const data = [
    {
        title: "News",
        category: "news",
        total: "4511",
        body: "Card Body"
    },
    {
        title: "Event",
        category: "events",
        total: "45",
        body: "Card Body"
    },
    {
        title: "News",
        category: "news",
        total: "45",
        body: "Card Body"
    },
    {
        title: "Event",
        category: "events",
        total: "45",
        body: "Card Body"
    },
    {
        title: "Lang usage",
        category: "lang-usage",
        total: "",
        chart: "donut-chart",
        body: "Card Body",
        itemdata: [
            {
                label: "FR",
                total: 14
            },
            {
                label: "EN",
                total: 154
            },
            {
                label: "ES",
                total: 104
            },
            {
                label: "DU",
                total: 54
            },
            {
                label: "BU",
                total: 15
            }
        ]
    },
    {
        title: "Content types",
        category: "lang-usage",
        total: "",
        chart: "donut-chart",
        body: "Card Body",
        itemdata: [
            {
                label: "News",
                total: 14
            },
            {
                label: "Events",
                total: 154
            },
            {
                label: "Opinions",
                total: 104
            },
            {
                label: "Studies",
                total: 54
            },
            {
                label: "Brochures",
                total: 15
            }
        ]
    }
];

export default class CorDashboardOverview extends Component {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render(data);
    }

    show(target) {
        console.log("show:", target);
        this.shadowRoot.querySelectorAll(`cor-dashboard-card:not([category=${target}])`).forEach(
            el => el.classList.add('hidden')
        );
        this.shadowRoot.querySelectorAll(`cor-dashboard-card[category=${target}]`).forEach(
            el => el.classList.remove('hidden')
        );
    }

    connectedCallback() {
        const {root} = this.root;
        const source = "filter";
        const update = () => {
            console.log("Name changed to", root[source]);
            this.show(root[source])
        };
    
        new MutationObserver(update).observe(root, {
            attributes: true,
            attributeFilter: [source]
        });

    }

}

if (!customElements.get('cor-dashboard-overview')) {
    customElements.define('cor-dashboard-overview', CorDashboardOverview);
}