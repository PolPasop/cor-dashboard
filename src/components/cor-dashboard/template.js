import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardSidebar from '../cor-dashboard-nav/cor-dashboard-nav.js'
import CorDashboardOverview from '../cor-dashboard-overview/cor-dashboard-overview.js'
import CorDashboardDetailed from '../cor-dashboard-detailed/cor-dashboard-detailed.js'
import CorDashboardDetailedItem from '../cor-dashboard-detailed-item/cor-dashboard-detailed-item.js'


export default {
  render(globalData) {
    return `${this.css()}
    ${this.html(globalData)}`;
  },

  html(globalData) {
    console.log(globalData);
    return `
    <div class="cor-dashboard">
      
      <!-- Topbar -->
      <div class="cor-dashboard__navbar">
        <h1 class="cor-dashboard__navbar__brand">European Committee of the Regions</h1>
      </div>
      <!-- /Topbar -->

      <!-- Sidebar -->
      <aside class="cor-dashboard__sidebar">
        <cor-dashboard-nav></cor-dashboard-nav>
      </aside>
      <!-- /Sidebar -->

      <!-- Main -->
      <main>
        <header>
          <img src="public/images/CoRlogo.png" />
          <h1>Dashboard</h1>
        </header>
        
        <cor-dashboard-overview>

          ${globalData.DATA.map( card => `
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

        </cor-dashboard-overview>

        <cor-dashboard-detailed>
          
          <span slot="number-of-items">${globalData.ITEMS.length}</span>

          ${globalData.ITEMS.map( item => `
            
            <cor-dashboard-detailed-item>
                  <span slot="contenttype">${item.contenttype}</span>
                  <span slot="title">${item.title}</span>
                  <span slot="date">${item.date}</span>
                  <span slot="theme" class="cor-dashboard-detailed-item__theme">${item.theme}</span>
                  <span slot="label">${item.label}</span>
                  <img slot="picture" src="${item.picture}" />
                  <span slot="intro">${item.intro}</span>
                  
                  
                  ${item.languages.map( language => `
                    <li class="cor-dashboard-detailed-item__languages-list__item" slot="language">
                      <cor-dashboard-languages-overview data-status="${language.status}">
                        <span slot="language-label">${language.label}</span>
                      </cor-dashboard-languages-overview>
                    </li>
                  `).join('')}
                  

            </cor-dashboard-detailed-item>
          
            ` ).join('')}
          
          
        </cor-dashboard-detailed>
      </main>
      <!-- /Main -->
      
    </div>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard/cor-dashboard.css"/>
    `
  }
}