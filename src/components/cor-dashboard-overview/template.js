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
                <!-- Card item -->
                <div class="cor-dashboard-card" category="${card.category}">
                    
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

                        <!-- Cards with chart -->
                        ${ (card.itemdata) ?                     
                            `
                            <div>
                            <span>
        
                                <!-- Check type of chart -->

                                ${ ((card.chart) === 'donut-chart' ) ? `
                                <cor-dashboard-donut-chart></cor-dashboard-donut-chart>
                                ` : ``}
        
                                ${ ((card.chart) === 'bar-chart' ) ? `
                                
                                <cor-dashboard-bar-chart></cor-dashboard-bar-chart>
                                ` : ``}
                                
                                <!-- /Check type of chart -->
        
                                
                            </span>
                            <ol>
                                ${(card.itemdata).map( el => `
                                <li>${el.label} <strong>${el.total}</strong></li>
                                ` ).join('')}
                            </ol>
                            </div>
                            ` 
                            : `` }
                        <!-- /Cards with chart -->

                        <!-- Cards displaying categories -->
                        ${ (card.newscategories) ? 
                            `
                            <span>
                                ${(card.newscategories).map( el => `
                                <p>${el.label} <strong>${el.total}</strong></p>
                                ` ).join('')}
                            </span>
                            ` 
                            : `` }
                        <!-- /Cards displaying categories -->


                        <!-- Cards displaying all the languages -->
                        ${ ((card.cardtype) === 'languageOverview') ? `
                        <div id="languagesChart"></div>
                        
                        
                            <ol 
                                data-data="[
                                ${card.languages.map(
                                    language => `{${language.label}:${language.total}},`
                                ).join('')}
                                ]">
                                ${card.languages.map(
                                    language => `<li>${language.label} <strong>${language.total}</strong></li>`
                                ).join('')}
                            </ol>
                            ` : ``}
                        <!-- /Cards displaying all the languages -->

                        
                    </div>
                    <!-- /Content of the card -->
                
                </div>
                <!-- /Card item -->
        `).join('')}
            
            `
    },

    css() {
        return `
        `
    }
}