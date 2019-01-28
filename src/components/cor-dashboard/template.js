import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardSidebar from '../cor-dashboard-nav/cor-dashboard-nav.js'
import CorDashboardOverview from '../cor-dashboard-overview/cor-dashboard-overview.js'

export default {
  render(globalData) {
    return `${this.css()}
    ${this.html(globalData)}`;
  },

  html(globalData) {
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

          ${globalData.map( card => `
            <cor-dashboard-card category="${card.category}">
                <span slot="title">${card.title}</span>
                <span slot="total">${card.total}</span>
                <span slot="body">${card.body}</span>
                    
                ${ (card.itemdata) ? 
                    `
                    <span slot="chart"><cor-dashboard-donut-chart></cor-dashboard-donut-chart></slot>
                    <ol slot="data">
                        ${(card.itemdata).map( el => `
                        <li>${el.label} ${el.total}</li>
                        ` ).join('')}
                    </ol>
                    ` 
                    : `` }

            </cor-dashboard-card>
          `).join('')}

        </cor-dashboard-overview>
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