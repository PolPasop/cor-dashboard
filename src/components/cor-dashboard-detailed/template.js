export default {
    render() {
        return `
            ${ this.html() }
            ${ this.css() }
        `
    },

    html() {
        return `
            <p class="cor-dashboard-detailed__title"><slot name="number-of-items"></slot> News</p>
            <slot></slot>
            
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed/cor-dashboard-detailed.css" />
        `
    }
}