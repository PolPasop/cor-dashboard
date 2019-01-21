export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `
    <p>sidebar</p>

    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard-sidebar/cor-dashboard-sidebar.css"/>
    `
  }
}