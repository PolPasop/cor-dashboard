export default {
    render(data) {
        return `${this.css()}
        ${this.html(data)}`;
    },

    html(data) {
        console.log("data:", data);
        return `${data.name}
        <div class="cor-dashboard-filter">
            <h2 class="cor-dashboard-filter__title"></h2>
            <ul class="cor-dashboard-filter__list">
                ${data.map( item => `
                    <p>${item.name}</P>
                `)}
                <li class="cor-dashboard-filter__list__item">
                    <a class="cor-dashboard-filter__list__item__link" href="{{ item.link }}">
                        element
                    </a>
                </li>
            </ul>
        </div> 
        `
    },

    css() {
        return `
        
        `
    }
}