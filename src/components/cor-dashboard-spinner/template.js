export default {
    render(stroke, radius, circumference, normalizedRadius) {
        return `
            ${this.html(stroke, radius, circumference, normalizedRadius)}
        `
    },

    html(stroke, radius, circumference, normalizedRadius) {
        return `
            <div class="cor-dashboard-spinning-loader"></div>
        `
    }
}