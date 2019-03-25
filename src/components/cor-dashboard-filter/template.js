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
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.name}" aria-expanded="false" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <ul class="cor-dashboard-filter__list" id="${filter.name}">
                    ${filter.items.map( item => `
                        <li class="cor-dashboard-filter__list__item">
                            <a class="cor-dashboard-filter__list__item__link" href="#" data-filter="${item.target}">
                                ${item.name}
                            </a>
                            ${item.subitems ? 
                            `
                            <ul>
                                ${item.subitems.map(
                                    item => `
                                    <li><a class="cor-dashboard-filter__list__item__link" href="#" data-target="${item.target}">${item.name}</a></li>
                                `
                                ).join('')} 
                            </ul>` : 
                            ``
                            }
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