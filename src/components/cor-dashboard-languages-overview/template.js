export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
       return `<slot name="language-label">lang label</slot>`
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-languages-overview/cor-dashboard-languages-overview.css"/>
        `
    }
}