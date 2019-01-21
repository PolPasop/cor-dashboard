import CodDashboardFilter from '../cor-dashboard-filter/cor-dashboard-filter.js';

export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `
    <cor-dashboard-filter></cor-dashboard-filter>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard-filter/cor-dashboard-filter.css"/>
    `
  }
}