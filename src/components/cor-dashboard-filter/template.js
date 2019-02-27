export default {
    render(data) {
        return `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        return `
        
        ${data.map( filter => `
            <div class="cor-dashboard-filter">
                <h2 class="cor-dashboard-filter__title">
                    <a class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" href="#" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        ${filter.name}
                    </a>
                </h2>
                <ul class="cor-dashboard-filter__list" id="collapseExample">
                    ${filter.items.map( item => `
                        <li class="cor-dashboard-filter__list__item">
                            <a class="cor-dashboard-filter__list__item__link" href="#">
                                ${item}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>                     
        `).join('')}
        

        `
    },

    css() {
        return `

        `
    }
}