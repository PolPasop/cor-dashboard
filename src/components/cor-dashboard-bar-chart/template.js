export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
        return `
            <div class="chart"></div>
        `
    },

    css() {
        return `
        <link rel="stylesheet" href="src/components/cor-dashboard-bar-chart/cor-dashboard-bar-chart.css" />
        `
    }
}