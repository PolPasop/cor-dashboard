export default {
    render() {
        return `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `
            <div class="cor-dashboard-card">
                <div class="cor-dashboard-card__body">
                <h2 class="cor-dashboard-card__title">
                    <slot name="title">title</slot>
                    <slot name="total">1</slot>
                </h2>
                    <slot name="body">body</slot>
                </div>
            </div>
        `
    },

    css() {
        return `
        <link rel="stylesheet" href="src/components/cor-dashboard-card/cor-dashboard-card.css" />
        `
    }
}