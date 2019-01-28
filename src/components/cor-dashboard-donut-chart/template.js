export default {
    render() {
        return `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `
            <svg id="#donut-chart"></svg>
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-donut-chart/cor-dashboard-donut-chart.css"/>
        `
    },
}