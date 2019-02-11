import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js';
import CorDashboardSidebar from '../cor-dashboard-nav/cor-dashboard-nav.js';
import CorDashboardOverview from '../cor-dashboard-overview/cor-dashboard-overview.js';
import CorDashboardDetailed from '../cor-dashboard-detailed/cor-dashboard-detailed.js';
import CorDashboardDetailedItem from '../cor-dashboard-detailed-item/cor-dashboard-detailed-item.js';
import CorDashboardTopnav from '../cor-dashboard-topnav/cor-dashboard-topnav.js';


export default {
  render(globalData) {
    return `${this.css()}
    ${this.html(globalData)}`;
  },

  html(globalData) {
    return `
    <div class="cor-dashboard">
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">European Committee of the Regions</a>
      </nav>
      
        <div class="row no-gutters">
        <!-- Sidebar -->
        <aside class="col-4 col-md-3 col-xl-2 d-md-block bg-light sidebar cor-dashboard__sidebar">
          <cor-dashboard-nav></cor-dashboard-nav>
        </aside>
        <!-- /Sidebar -->

        <!-- Main -->
        <main role="main" class="col-8 col-md-9 col-xl-10 ml-sm-auto">
          
          <header>
            <img src="public/images/CoRlogo.png" />
            <h1>Dashboard</h1>
            
            <cor-dashboard-topnav></cor-dashboard-topnav>
          </header>
          
          
          <cor-dashboard-overview></cor-dashboard-overview>

          <cor-dashboard-detailed></cor-dashboard-detailed>
        </main>
        <!-- /Main -->
      </div>
      
    </div>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/corev15.css" />
      <link rel="stylesheet" href="src/bootstrap.min.css">
      <link rel="stylesheet" href="src/components/cor-dashboard/cor-dashboard.css"/>
    `
  }
}