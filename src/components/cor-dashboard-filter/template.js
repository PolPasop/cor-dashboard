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
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.filterName}" aria-expanded="${filter.expanded ? "true" : "false"}" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <div id="${filter.filterName}" class="cor-dashboard-filter__list-container">
                    <ul class="cor-dashboard-filter__list cor-dashboard-filter__list--${filter.filterName}">
                        ${filter.items.map( item => `
                            <li class="cor-dashboard-filter__list__item">
                                
                                ${item.name === "Personalised" ? `
                                    <div class="form-group">
                                        <label for="start">Start date:</label>

                                        <input class="form-control" type="date" id="start" name="date-start"
                                        value="2018-07-22"
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="start">End date:</label>

                                        <input class="form-control" type="date" id="end" name="date-end"
                                            value="2018-07-22"
                                            >
                                    </div>
                                ` : `
                                    <div class="checkbox checkbox-indent" style="display:inline-block;">
                                        <label>News<input type="checkbox" name="item_type" class="box-2" id="item_type-1329" value="1329" checked="Checked"><span class="badge"></span></label>
                                    </div>

                                    <a class="cor-dashboard-filter__list__item__link ${item.subitems ? "cor-dashboard-filter__list__item__link--parent" : "" }" href="#" data-filter="${item.target}" href="#/">
                                        <input type="checkbox" id="${item.name}" name="${item.name}">
                                        <label for="${item.name}">${item.name}</label>
                                        
                                        ${item.type !== "date" ? `
                                            <span>${item.number ? item.number : 0}</span>
                                        ` : ``}
                                    </a>
                                `}
                                
                                ${item.subitems ? 
                                `
                                <ul>
                                    ${item.subitems.map(
                                        item => `
                                        <li><a class="cor-dashboard-filter__list__item__sublink" href="#/" data-filter="${item.target}">
                                            <input type="checkbox" id="scales" name="scales">
                                            <label for="scales">${item.name}</label> <span>${item.number ? item.number : 0}</span></a></li>
                                    `
                                    ).join('')} 
                                </ul>` : 
                                ``
                                }
                            </li>
                        `).join('')}
                    </ul>
                    <div class="cor-dahsboard-btncontainer">
                        <button class="cor_button btn cor_button--after cor-dashboard-filtersbtn">Apply selection</button>
                    </div>
                </div>
            </div>                     
        `).join('')}
        

        `
    },

    css() {
        return `

        `
    }
}
