import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'

const createDataAttribute = data => {
    const languagesLenght = data.length;
    let formatedData = '';
    data.map( (language, i) => {
        if (languagesLenght === i+1 ) {
            // last one
            formatedData += `{
                "label": "${language.label}",
                "total": ${language.total}}`;
        } else {
            // not last one
            formatedData += `{
                "label": "${language.label}",
                "total": ${language.total}},`;
        }
        
    })
    return formatedData;
};

export default {
    render(data) {
        return  `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        console.log(data);
        return `
            ${data.map( card => `
                <!-- Card item -->
                <div class="cor-dashboard-card" category="${card.category}" size="${card.size}">
                    
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
        
                                <!-- Check type of chart -->

                                ${ ((card.chart) === 'donut-chart' ) ? `
                                <cor-dashboard-donut-chart class="cor-dashboard-donut-chart"></cor-dashboard-donut-chart>
                                ` : ``}
        
                                ${ ((card.chart) === 'bar-chart' ) ? `
                                
                                <cor-dashboard-bar-chart class="cor-dashboard-bar-chart" data-data=
                                '[${createDataAttribute(card.itemdata)}]'></cor-dashboard-bar-chart>

                                
                                
                                ` : ``}
                            
                                <!-- /Check type of chart -->
        
                            </div>
                            ` 
                            : `` }
                        <!-- /Cards with chart -->

                        <!-- Cards displaying categories -->
                        ${ (card.newscategories) ? 
                            `
                                ${(card.newscategories).map( el => `
                                <p class="cor-dashboard-card__listing-item">${el.label} <strong>${el.total}</strong></p>
                                ` ).join('')}
                            ` 
                            : `` }
                        <!-- /Cards displaying categories -->


                        <!-- Cards displaying all the languages -->
                        ${ ((card.cardtype) === 'languageOverview') ? `                        
                            
                            <cor-dashboard-bar-chart class="cor-dashboard-bar-chart" data-data='[${createDataAttribute(card.languages)}]'></cor-dashboard-bar-chart>
                            
                            ` : ``}
                        <!-- /Cards displaying all the languages -->


                        <!-- Multilinguism card -->
                        ${ ((card.cardtype) === 'multilinguismOverview') ? `
                            <div class="cor-dashboard-multilinguismTable">
                                
                                
                                <div>
                                    <h2>Languages</h2>  
                                    <ol>
                                        ${card.multilingualContent[0].translations.map(
                                            translation => translation.label === "EN" ? `<li class="cor-dashboard__multilinguismTable__en"><a href="#">${translation.label}</a></li>` : `<li><a href="#">${translation.label}</a></li>` 
                                        ).join('')}
                                    </ol>
                                </div>
                      
                                ${card.multilingualContent.map(
                                    multilingualContent => `
                                        <div>
                                            <h2>${multilingualContent.contenttype} </h2>

                                            <ol>
                                                ${multilingualContent.translations.map(
                                                    translation => translation.label === "EN" ? `<li class="cor-dashboard__multilinguismTable__en"><a href="#">${translation.total}</a></li>` : `<li><a href="#">${translation.total}</a></li>`
                                                ).join('')}
                                            </ol>
                                        </div>
                                    `
                                ).join('')}
                            
                            
                            </div>
                            ` : ``}
                        <!-- /Multilinguism card -->

                        
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