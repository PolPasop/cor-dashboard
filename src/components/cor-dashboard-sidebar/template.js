import CodDashboardFilter from '../cor-dashboard-filter/cor-dashboard-filter.js';


export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
      console.log();
    return `
    <h1>CoR Dashboard</h1>
    <ul>
        <li>
            <a href="">News</a>
        </li>
        <li>
            <a href="">News</a>
        </li>
        <li>
            <a href="">Br</a>
        </li>
    </ul>
    <cor-dashboard-filter></cor-dashboard-filter>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard-filter/cor-dashboard-filter.css"/>
    `
  }
}