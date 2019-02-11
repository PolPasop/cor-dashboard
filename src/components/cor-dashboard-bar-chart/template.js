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
        <link rel="stylesheet" href="src/corev15.css" />
        <link rel="stylesheet" href="src/bootstrap.min.css">
        <link rel="stylesheet" href="src/components/cor-dashboard-bar-chart/cor-dashboard-bar-chart.css" />
        `
    }
}