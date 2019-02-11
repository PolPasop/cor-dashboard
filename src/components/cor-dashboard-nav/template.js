const navitems = [

      {
        name: "Dashboard",
        target: ""
      },
      {
        name: "News",
        target: "news",
        subitems: [
          {
            name: "Regional news"
          },
          {
            name: "Press release"
          },
          {
            name: "Success story"
          }
        ]
      },
      {
        name: "Events",
        target: "events"
      },
      {
        name: "Opinions",
        target: ""
      },
      {
        name: "Studies",
        target: ""
      },
      {
        name: "Brochures",
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
            <a class="cor-dashboard__nav-link" href="#" data-target="${navitem.target}">${navitem.name}</a>
            
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
      <link rel="stylesheet" href="src/corev15.css" />
      <link rel="stylesheet" href="src/bootstrap.min.css">
      <link rel="stylesheet" href="src/components/cor-dashboard-nav/cor-dashboard-nav.css"/>
    `
  }
}