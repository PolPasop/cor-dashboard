import CorDashboardCard from '../cor-dashboard-card/cor-dashboard-card.js'

export default {
    render() {
        return  `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `
            <cor-dashboard-card category="news">
                <span slot="title">News title</span>
                <span slor="total">45</span>
                <span slot="body">New body</span>
            </cor-dashboard-card>

            <cor-dashboard-card category="events">
                <span slot="title">Event title</span>
                <span slor="total">45</span>
                <span slot="body">New body</span>
            </cor-dashboard-card>

            <cor-dashboard-card category="news">
                <span slot="title">News title</span>
                <span slor="total">45</span>
                <span slot="body">New body</span>
            </cor-dashboard-card>

            <cor-dashboard-card category="events">
                <span slot="title">Event title</span>
                <span slor="total">45</span>
                <span slot="body">New body</span>
            </cor-dashboard-card>
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-overview/cor-dashboard-overview.css" />
        `
    }
}