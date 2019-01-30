export default {
    render() {
        return `${this.css()}
        ${this.html()}`;
    },

    html() {
        return `

            <!-- Card item -->
            <div class="cor-dashboard-card">
                
                <!-- Title of the card -->
                <h2 class="cor-dashboard-card__title">
                    <slot name="title">title</slot>
                    <span class="cor-dashboard-card__title__total">
                        <slot name="total">1</slot>
                    </span>
                </h2>
                <!-- /Title of the card -->
                
                <!-- Content of the card -->
                <div class="cor-dashboard-card__body">
                    <slot name="card-content">
                        
                            <slot name="chart"></slot>
                            <slot name="data"></slot>
                            <ol>
                                <slot name="category"></slot>
                            </ol>
                            </slot>
                    </slot>
                </div>
                <!-- /Content of the card -->
            
            </div>
            <!-- /Card item -->
        `
    },

    css() {
        return `
        <link rel="stylesheet" href="src/components/cor-dashboard-card/cor-dashboard-card.css" />
        `
    }
}