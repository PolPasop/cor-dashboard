export default {
    render() {
        return `
            ${this.html()}
        `
    },

    html() {
        return `
            <cor-dashboard-overview class="cor-dashboard-overview"></cor-dashboard-overview>
            <cor-dashboard-detailed class="cor-dashboard-detailed"></cor-dashboard-detailed>
        `
    }
}