import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'

export default {
    render(data) {
        return  `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        return `
            ${data.map( card => `
            <cor-dashboard-card category="${card.category}">
                <span slot="title">${card.title}</span>
                <span slot="total">${card.total}</span>
                <span slot="card-content" hidden></span>

                    
                ${ (card.itemdata) ? 
                    `
                    <div slot="card-content">
                    <span slot="chart">

                        <!-- Check type of chart -->
                        ${ ((card.chart) === 'donut-chart' ) ? `
                        <cor-dashboard-donut-chart></cor-dashboard-donut-chart>
                        ` : ``}

                        ${ ((card.chart) === 'bar-chart' ) ? `
                        <cor-dashboard-bar-chart></cor-dashboard-bar-chart>
                        ` : ``}
                        <!-- /Check type of chart -->

                        
                    </slot>
                    <ol slot="data">
                        ${(card.itemdata).map( el => `
                        <li>${el.label} ${el.total}</li>
                        ` ).join('')}
                    </ol>
                    </div>
                    ` 
                    : `` }

                ${ (card.newscategories) ? 
                `
                <span slot="card-content">
                    ${(card.newscategories).map( el => `
                    <p slot="category">${el.label} <strong>${el.total}</strong></p>
                    ` ).join('')}
                </span>
                ` 
                : `` }

                
                
                
                ${ ((card.cardtype) === 'languageOverview') ? `` : `lang no`}

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