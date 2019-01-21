const navitems = [

      {
        name: "Dashboard"
      },
      {
        name: "News"
      },
      {
        name: "Events"
      },
      {
        name: "Opinions"
      },
      {
        name: "Studies"
      },
      {
        name: "Brochures"
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
            <a class="cor-dashboard__nav-link" href="#">${navitem.name}</a>
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