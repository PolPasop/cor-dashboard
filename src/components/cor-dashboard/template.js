import CorDashboardSidebar from '../cor-dashboard-sidebar/cor-dashboard-sidebar.js'

export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `
    <div class="cor-dashboard cor-l-dashboard">
      <aside class="cor-o-dashboard__sidebar">
        <cor-dashboard-sidebar></cor-dashboard-sidebar>
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