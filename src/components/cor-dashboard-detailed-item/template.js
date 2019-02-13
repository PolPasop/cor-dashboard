import CorDashboardLanguagesOverview from '../cor-dashboard-languages-overview/cor-dashboard-languages-overview.js'

export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },

    html() {
        return `
            <article>
                <p><slot name="contenttype">News</slot></p>
                <h1 class="cor-dashboard-article__title">
                    <slot name="title">Title of the news</slot>
                </h1>
                <p class="cor-dashboard-article__details">
                    <slot name="date"></slot> 
                     
                    | 
                    <slot name="theme"></slot> 
                    <slot name="label" class="cor-dashboard-article__details__label"></slot>
                </p>
                <p class="cor-dashboard-detailed-item__intro-container">
                    <slot name="picture"></slot>
                    <slot name="intro"></slot>
                </p>
                
                <ul class="cor-dashboard-detailed-item__languages-list" slot="languages">
                    <slot class="cor-dashboard-detailed-item__languages-list__item" name="language">
                        <li class="cor-dashboard-detailed-item__languages-list__item">
                            <cor-dashboard-languages-overview>
                                <span slot="language-label">lang</slot>
                            <cor-dashboard-languages-overview>
                        </li>
                    </slot>
                </ul>

            </article>    
        `
    },

    css() {
        return `

        `
    }

}