import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'
import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'

export default {
    render() {
        return  `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `
            <slot>No overview results</slot>
            `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-overview/cor-dashboard-overview.css" />
        `
    }
}