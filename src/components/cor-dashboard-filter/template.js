export default {
    render(data) {
        return `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        return `
        
        ${data.map( filter => `
            <div class="cor-dashboard-filter expandable">
                <h2 class="cor-dashboard-filter__title">
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.filterName}" aria-expanded="false" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <ul class="cor-dashboard-filter__list" id="${filter.filterName}">
                    ${filter.items.map( item => `
                        <li class="cor-dashboard-filter__list__item">

                            ${item.name === "Personalised" ? `
                                <div>
                                    <label for="start">Start date:</label>

                                    <input type="date" id="start" name="trip-start"
                                    value="2018-07-22"
                                    min="2018-01-01" max="2018-12-31">
                                </div>
                                <div>
                                    <label for="start">End date:</label>

                                    <input type="date" id="start" name="trip-start"
                                        value="2018-07-22"
                                        min="2018-01-01" max="2018-12-31">
                                </div>
                            ` : `
                            <a class="cor-dashboard-filter__list__item__link" href="#" data-filter="${item.target}">
                                ${item.name}
                            </a>
                            `}


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
