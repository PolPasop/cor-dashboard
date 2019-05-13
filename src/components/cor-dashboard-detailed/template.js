import CorDashboardDetailedItem from '../cor-dashboard-detailed-item/cor-dashboard-detailed-item.js';
import CorDashboardLanguagesOverview from '../cor-dashboard-languages-overview/cor-dashboard-languages-overview.js';

export default {
    render(data) {
        return `
            ${ this.html(data) }
            ${ this.css() }
        `
    },

    html(data) {
        return `
            <p class="cor-dashboard-card__title cor-dashboard-detailed__title">
            ${data.length} News
                <select>
                    <option value="">Sort by</option>
                    <option value="date">Date</option>
                </select>
            </p>

            ${data.map( item => `

            <article class="cor-dashboard-detailed-item">

                <p class="cor-dashboard-detailed-item__contenttype">${item.contenttype}</p>
                
                <img src="${item.picture}" />
                
                <div>
                    
                    <h1 class="cor-dashboard-article__title">${item.title}</h1>
                    <p class="cor-dashboard-article__details">
                        ${item.label ? `<span class="cor-dashboard-article__label ${item.label === "Press release" ? "cor-dashboard-article__label--pressrelease" : ""} ${item.label === "Regional news" ? "cor-dashboard-article__label--regionalnews" : ""} ${item.label === "Success story" ? "cor-dashboard-article__label--successstory" : ""} ${item.label === "International cooperation" ? "cor-dashboard-article__label--internationalcoop" : ""}">${item.label}</span>`: ``}
                        <span>${item.date}</span>
                        ${item.theme ? `&nbsp;|&nbsp;<span>${item.theme}</span>`: ``}
                    </p>
                    <p class="cor-dashboard-article__extradetails">
                        <span><strong>Lorem:</strong> ipsum</span>
                        <span><strong>Lorem:</strong> ipsum</span>
                        <span><strong>Lorem:</strong> ipsum</span>
                        <span><strong>Lorem:</strong> ipsum</span>
                        <span><strong>Lorem:</strong> ipsum</span>
                    </p>
                    <p class="cor-dashboard-detailed-item__intro-container">
                        <span >${item.intro}</span>
                    </p>
                    
                </div>

                <ul class="cor-dashboard-detailed-item__languages-list">
                    
                        ${item.languages.map( language => `
                            <li class="cor-dashboard-detailed-item__languages-list__item">
                            <div class="cor-dashboard-languages-overview" data-status="${language.status}">
                                <span title="language" data-lang="${language.label}">${language.label}</span>
                            </div>
                            </li>
                        `).join('')}
                        
                    </ul>

            </article>
              

            
              ` ).join('')}
            
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed/cor-dashboard-detailed.css" />
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed-item/cor-dashboard-detailed-item.css" />
        `
    }
}