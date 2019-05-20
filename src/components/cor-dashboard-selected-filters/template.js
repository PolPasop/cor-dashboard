export default {
    render(filters) {
        return `
            ${this.html(filters)}
        `
    },

    html(filters) { 
        console.log(filters);      
        return `
            Selected filters: <ul>
                ${filters ? (filters.map(filter => {
                    if(filter !== "") {
                        return `
                            <li data-selectedFilter="${filter}">
                                ${filter} <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.12556 0L12.381 11.8182L11.2554 13L1.98083e-05 1.18182L1.12556 0Z" fill="#C4C4C4"/>
                                <path d="M12.381 1.18182L1.12554 13L0 11.8182L11.2554 1.72588e-06L12.381 1.18182Z" fill="#C4C4C4"/>
                                </svg>
                            </li>`
                    };
                }).join('')) : ``}
            </ul>
        `
    }
}