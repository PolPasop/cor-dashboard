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
                console.log("render detailed");
                return `
                    <div class="cor-dashboard-main">
                        <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
                    </div>
                `;
                break;
            default:
               return `
                    <div class="cor-dashboard-main">
                        <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
                    </div>
                `
        }
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-main/cor-dashboard-main.css" />
        `
    }
}