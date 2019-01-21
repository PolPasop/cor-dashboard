import CorDashboardSidebar from '../cor-dashboard-nav/cor-dashboard-nav.js'

export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `
    <div class="cor-dashboard">
      <div class="cor-dashboard__navbar">
        <h1 class="cor-dashboard__navbar__brand">European Committee of the Regions</h1>
      </div>
      <aside class="cor-dashboard__sidebar">
        <cor-dashboard-nav></cor-dashboard-nav>
      </aside>
      <main>
        
      </main>
    </div>
    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard/cor-dashboard.css"/>
    `
  }
}