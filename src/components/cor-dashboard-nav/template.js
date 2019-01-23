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
      console.log(navitems);
    return `
    <ul class="cor-dashboard__nav">
        ${navitems.map(navitem => `
          <li class="cor-dashboard__nav__item">
            <a class="cor-dashboard__nav-link" href="#" data-target="${navitem.target}">${navitem.name}</a>
            ${ navitem.subitems ? `<ul>${navitem.subitems.map(subitem => `<li><a class="cor-dashboard__nav-link">${subitem.name}</a></li>`).join('')}</ul>` : ``}
          </li>
        `).join('')}
    </ul>
    <cor-dashboard-filter>
      <span slot="name">sloot</slot>
    </cor-dashboard-filter>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard-nav/cor-dashboard-nav.css"/>
    `
  }
}