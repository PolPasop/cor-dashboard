import CorDashboardSpinner from '../cor-dashboard-spinner/cor-dashboard-spinner.js';

export default {
    render(view) {
        return `
            ${this.css()}
            ${this.html(view)}
        `
    },

    html(view) {
        
        switch(view) {
            case "detailed":
                return `
                    <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
                `;
                break;
            case "overview":
                return `
                    <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
                `;
                break;
            default:
               return `
                    <cor-dashboard-spinner class="cor-dashboard-spinner"></cor-dashboard-spinner>
                `
        }
    },

    css() {
        return `
        `
    }
}