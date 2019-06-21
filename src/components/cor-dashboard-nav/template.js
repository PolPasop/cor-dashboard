const navitems = [

      {
        name: "Dashboard",
        icon: "home",
        target: ""
      }
];


import CodDashboardFilter from '../cor-dashboard-filter/cor-dashboard-filter.js';


export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `

    <!-- Menu -->
    <ul class="cor-dashboard__nav">
        ${navitems.map(navitem => `
          <li class="cor-dashboard__nav__item">
            <a class="cor-dashboard__nav-link cor-dashboard__nav-link--${navitem.icon}" href="#" data-target="${navitem.target}">${navitem.name}</a>
            
            <!-- Sub menu -->
            ${ navitem.subitems ? `
              <ul>${navitem.subitems.map(subitem => `
                <li>
                  <a class="cor-dashboard__nav-link">${subitem.name}</a>
                </li>`).join('')}
              </ul>` : ``}
            <!-- /Sub menu -->

          </li>
        `).join('')}
    </ul>
    <!-- /Menu -->
      
    <!-- Filtres -->
    <cor-dashboard-filter></cor-dashboard-filter>
    <!-- /Filtres -->    
    `
  },

  css() {
    return `

    `
  }
}