import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'

const data = [
    {
        title: "News Title",
        category: "news",
        total: "45",
        body: "Card Body"
    },
    {
        title: "Event Title",
        category: "events",
        total: "45",
        body: "Card Body"
    },
    {
        title: "News Title",
        category: "news",
        total: "45",
        body: "Card Body"
    },
    {
        title: "Event Title",
        category: "events",
        total: "45",
        body: "Card Body"
    }
];

export default {
    render() {
        return  `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `${data.map( item => `

            <cor-dashboard-card category="${item.category}">
                <span slot="title">${item.title}</span>
                <span slot="total">${item.total}</span>
                <span slot="body">${item.body}</span>
            </cor-dashboard-card>

            `).join('')}
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-overview/cor-dashboard-overview.css" />
        `
    }
}