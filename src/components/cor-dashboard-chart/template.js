import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'

export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
        return `
            <cor-dashboard-donut-chart></cor-dashboard-donut-chart>
        `
    },

    css() {
        return `

        `
    }
}