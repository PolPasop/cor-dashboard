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
        
        <cor-dashboard-overview></cor-dashboard-overview>

        <cor-dashboard-detailed></cor-dashboard-detailed>
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