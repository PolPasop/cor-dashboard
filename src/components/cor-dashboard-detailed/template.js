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
                <p>${item.contenttype}</p>
                <h1 class="cor-dashboard-article__title">${item.title}</h1>
                <p class="cor-dashboard-article__details">
                    <span class="cor-dashboard-article__label">${item.label}</span>
                    <strong>${item.date}</strong>&nbsp;|&nbsp;<span>${item.theme}</span>
                    
                </p>
                <p class="cor-dashboard-detailed-item__intro-container">
                    <img src="${item.picture}" />
                    <span >${item.intro}</span>
                </p>
                
                <ul class="cor-dashboard-detailed-item__languages-list">
                
                    ${item.languages.map( language => `
                        <li class="cor-dashboard-detailed-item__languages-list__item">
                        <div class="cor-dashboard-languages-overview" data-status="${language.status}">
                            <span title="language">${language.label}</span>
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