export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
        return `
            <p>detailed</p>
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-card-detailed/cor-dashboard-card-detailed.css"/>
        `
    }
}