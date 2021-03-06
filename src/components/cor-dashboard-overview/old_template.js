import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'
import Chart from '../charts.js';

export default {
    render(data) {
        return  `${this.css()}
        ${this.html(data)}`;
    },

    createChart(data, selector) {
        Chart.barChart(data, selector);
    },

    html(data) {
        return `
            ${data.map( card => `

            
            <!-- No slots -->
                <!-- Card item -->
                <cor-dashboard-card class="cor-dashboard-card" category="${card.category}">
                    
                    <!-- Title of the card -->
                    <h2 class="cor-dashboard-card__title">
                        <span>${card.title}</span>
                        <span class="cor-dashboard-card__title__total">
                            <span>${card.total}</span>
                        </span>
                    </h2>
                    <!-- /Title of the card -->
                    
                    <!-- Content of the card -->
                    <div class="cor-dashboard-card__body">
                        <slot name="card-content">
                            
                                <slot name="chart"></slot>
                                <slot name="data"></slot>
                                <ol>
                                    <slot name="category"></slot>
                                </ol>
                                </slot>
                        </slot>
                    </div>
                    <!-- /Content of the card -->
                
                </cor-dashboard-card>
                <!-- /Card item -->
            <!-- /No slots -->



            
            <cor-dashboard-card category="${card.category}">
                <span slot="title">${card.title}</span>
                <span slot="total">${card.total}</span>
                <span slot="card-content" hidden></span>

                
                <!-- Cards with chart -->
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

                        
                    </span>
                    <ol slot="data">
                        ${(card.itemdata).map( el => `
                        <li>${el.label} ${el.total}</li>
                        ` ).join('')}
                    </ol>
                    </div>
                    ` 
                    : `` }
                <!-- /Cards with chart -->

                <!-- Cards displaying categories -->
                ${ (card.newscategories) ? 
                    `
                    <span slot="card-content">
                        ${(card.newscategories).map( el => `
                        <p slot="category">${el.label} <strong>${el.total}</strong></p>
                        ` ).join('')}
                    </span>
                    ` 
                    : `` }
                <!-- /Cards displaying categories -->
                
                
                <!-- Cards displaying all the languages -->
                ${ ((card.cardtype) === 'languageOverview') ? `
                ${ Chart.barChart(card.languages, "#languagesChart") }
                
                    <ol slot="card-content">
                        ${card.languages.map(
                            language => `<li>${language.label} ${language.total}</li>`
                        ).join('')}
                    </ol>
                    ` : ``}
                <!-- /Cards displaying all the languages -->

            </cor-dashboard-card>

            
        `).join('')}
            
            `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-overview/cor-dashboard-overview.css" />
        `
    }
}