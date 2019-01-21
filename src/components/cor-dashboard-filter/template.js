export default {
    render(data) {
        return `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        console.log("data:", data);
        return `
        
        ${data.map( filter => `
            <div class="cor-dashboard-filter">
                <h2 class="cor-dashboard-filter__title">
                    <a class="cor-dashboard-filter__list__item__link" href="#" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0267 2.11765L9.6 0H0V18H2.13333V10.5882H8.10667L8.53333 12.7059H16V2.11765H10.0267Z" fill="#787878"/>
                        </svg>
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
        `)}
        

        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-filter/cor-dashboard-filter.css"/>
        `
    }
}