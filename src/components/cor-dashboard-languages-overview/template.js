export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
       return `<slot class="cor-dashboard-languages-overview__label" name="language-label">lang label</slot>`
    },

    css() {
        return `
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-languages-overview/cor-dashboard-languages-overview.css"/>
        `
    }
}