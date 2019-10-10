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
                    <div class="cor-dashboard-main">
                        <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
                    </div>
                `;
                break;
            case "overview":
                return `
                <div class="cor-dashboard-main">
                    <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
                </div>
                `;
                break;
            default:
               return `
                    <div class="cor-dashboard-main">
                        <cor-dashboard-spinner class="cor-dashboard-spinner"></cor-dashboard-spinner>
                    </div>
                `
        }
    },

    css() {
        return `
        `
    }
}