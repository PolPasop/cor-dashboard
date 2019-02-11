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
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-donut-chart/cor-dashboard-donut-chart.css"/>
        `
    },
}