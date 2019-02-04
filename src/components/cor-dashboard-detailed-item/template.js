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
                <h1>
                    <slot name="title">Title of the news</slot>
                </h1>
                <p>
                    <slot name="date"></slot> 
                     
                    | 
                    <slot name="theme"></slot> 
                    <slot name="label"></slot>
                </p>
                <p class="cor-dashboard-detailed-item__intro-container">
                    <slot name="picture"></slot>
                    <slot name="intro"></slot>
                </p>
                
                <ul class="cor-dashboard-detailed-item__languages-list" slot="languages">
                    <slot class="cor-dashboard-detailed-item__languages-list__item" name="language">
                        <li class="cor-dashboard-detailed-item__languages-list__item">No language</li>
                    </slot>
                </ul>

            </article>    
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed-item/cor-dashboard-detailed-item.css" />
        `
    }

}