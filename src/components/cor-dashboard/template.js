import CorDashboardSidebar from '../cor-dashboard-nav/cor-dashboard-nav.js';
import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js';
import CorDashboardOverview from '../cor-dashboard-overview/cor-dashboard-overview.js';
import CorDashboardDetailed from '../cor-dashboard-detailed/cor-dashboard-detailed.js';
import CorDashboardTopnav from '../cor-dashboard-topnav/cor-dashboard-topnav.js';
import CorDashboardMain from '../cor-dashboard-main/cor-dashboard-main.js';
import CorDashboardSelectedFilters from '../cor-dashboard-selected-filters/cor-dashboard-selected-filters.js';

export default {
  render(globalData) {
    return `${this.css()}
    ${this.html(globalData)}`;
  },

  html(globalData) {
    return `
    <div class="cor-dashboard">
      <nav class="cor-dashboard-navbar navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">European Committee of the Regions</a>
      </nav>
      
        <!-- Sidebar -->
        <aside class=" bg-light sidebar cor-dashboard__sidebar">
          <cor-dashboard-nav class="cor-dashboard-nav"></cor-dashboard-nav>
          
          <button class="cor-dashboard-slidebtn">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </aside>
        <!-- /Sidebar -->

        <!-- Main -->
        <main role="main">
          
          <header class="cor-dashboard-header">
            <img src="public/images/CoRlogo.png" />
            <h1>Dashboard</h1>
            
            <cor-dashboard-topnav class="cor-dashboard-topnav"></cor-dashboard-topnav>
          </header>

          <cor-dashboard-selected-filters class="cor-dashboard-selected-filters"></cor-dashboard-selected-filters>
        
          <cor-dashboard-main></cor-dashboard-main>

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