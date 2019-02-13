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
        `
    },
}