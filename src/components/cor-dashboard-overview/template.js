import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'

export default {
    render(data) {
        return  `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        return `${data.map( item => `

            <cor-dashboard-card category="${item.category}">
                <span slot="title">${item.title}</span>
                <span slot="total">${item.total}</span>
                <span slot="body">${item.body}</span>
                    
                ${ (item.itemdata) ? 
                    `
                    <ol slot="data">
                        ${(item.itemdata).map( el => `
                        <li>${el.label} ${el.total}</li>
                        ` ).join('')}
                    </ol>
                    ` 
                    : `` }

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