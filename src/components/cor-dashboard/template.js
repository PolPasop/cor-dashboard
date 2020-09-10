import CorDashboardSidebar from "../cor-dashboard-nav/cor-dashboard-nav.js";
import CorDashboardCard from "../cor-dashboard-card/cor-dashboard-card.js";
import CorDashboardOverview from "../cor-dashboard-overview/cor-dashboard-overview.js";
import CorDashboardDetailed from "../cor-dashboard-detailed/cor-dashboard-detailed.js";
import CorDashboardTopnav from "../cor-dashboard-topnav/cor-dashboard-topnav.js";
import CorDashboardMain from "../cor-dashboard-main/cor-dashboard-main.js";
import CorDashboardSelectedFilters from "../cor-dashboard-selected-filters/cor-dashboard-selected-filters.js";
import CorDashboardDateBtn from "../cor-dashboard-date-btn/cor-dashboard-date-btn.js";

export default {
  render(globalData) {
    return `${this.css()}
    ${this.html(globalData)}`;
  },

  html(globalData) {
    return `
    <div class="cor-dashboard">
        <!-- Sidebar -->
        <aside class="sidebar cor-dashboard__sidebar">
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
            <div class="cor-dashboard-header-img-container">
              <img src="public/images/CoRlogo.png" />
            </div>
            <h1>Dashboard 2</h1>
            
            <cor-dashboard-topnav class="cor-dashboard-topnav"></cor-dashboard-topnav>
          </header>

          <div class="cor-dashboard-top-tools">

            <div class="cor-dashboard__btn-group" id="cor-dashboard-topnav">
                <a data-view="overview" type="button" class="btn btn-sm btn-outline-primary active">Overview</a>
                <a data-view="detailed" href="#" type="button" class="btn btn-sm btn-outline-primary">Detailed</a>
            </div>
          
            <cor-dashboard-selected-filters class="cor-dashboard-selected-filters"></cor-dashboard-selected-filters>
            
            <!--
            <button class="cor_button btn">
              <svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-horizontal" class="svg-inline--fa fa-grip-horizontal fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>
            </button>

            <button class="cor_button btn">
              <svg width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-lines" class="svg-inline--fa fa-grip-lines fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
            </button>
            -->

            <cor-dashboard-date-btn class="cor-dashboard-date-btn"></cor-dashboard-date-btn>

            
          </div>
        
          <cor-dashboard-main class="cor-dashboard-main"></cor-dashboard-main>

        </main>
        <!-- /Main -->
      
    </div>
    `;
  },

  css() {
    return `
    `;
  },
};
