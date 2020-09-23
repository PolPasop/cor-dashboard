export default {
    render(data) {
        return `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        return `
        
        ${data.map(filter => `
            <div class="cor-dashboard-filter expandable">
                <h2 class="cor-dashboard-filter__title">
                    <button class="cor-dashboard-filter__list__item__link cor-dashboard-filter__list__item__link--${filter.icon}" data-toggle="collapse" data-expandtarget="${filter.filterName}" aria-expanded="${filter.expanded ? "true" : "false"}" aria-controls="collapseExample">
                        ${filter.name}
                    </button>
                </h2>
                <div id="${filter.filterName}" class="cor-dashboard-filter__list-container">
                    <ul class="cor-dashboard-filter__list cor-dashboard-filter__list--${filter.filterName}">
                        ${filter.items.map(item => `
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
                                    

                                    <a class="form-group cor-dashboard-filter__list__item__link ${item.subitems ? "cor-dashboard-filter__list__item__link--parent" : ""}" href="#" data-filter="${item.target}" href="#/">
                                        <label class="form-check-label" for="${item.name}">
                                            <input class="form-check-input" type="checkbox" id="${item.name}" name="${item.name}"> <span>${item.name}</span>
                                            ${item.type !== "date" ? `
                                                <span class="cor-dashboard-filter__counter">${item.number ? item.number : 0}</span>
                                            ` : ``}    
                                        </label>
                                    </a>
                                `}
                                
                                ${item.subitems ?
                `
                                <ul>
                                    ${item.subitems.map(
                    item => `
                                        <li>
                                            <a class="cor-dashboard-filter__list__item__sublink" href="#/" data-filter="${item.target}">
                                                <label for="scales">
                                                    <input class="form-check-input" type="checkbox" id="scales" name="scales"> ${item.name} <span class="cor-dashboard-filter__counter">${item.number ? item.number : 0}</span>
                                                </label>
                                            </a>
                                        </li>
                                    `
                ).join('')} 
                                </ul>` :
                ``
            }
                            </li>
                        `).join('')}
                    </ul>
                    <div class="cor-dahsboard-btncontainer">
                        <button type="button" class="btn btn-outline-primary cor-dashboard-filtersbtn">
                            Apply selection
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                            </svg>
                        </button>
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
