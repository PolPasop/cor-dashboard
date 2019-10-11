import CorDashboardDetailedItem from '../cor-dashboard-detailed-item/cor-dashboard-detailed-item.js';
import CorDashboardLanguagesOverview from '../cor-dashboard-languages-overview/cor-dashboard-languages-overview.js';
import CorDashboardPagination from '../cor-dashboard-pagination/cor-dashboard-pagination.js';


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

            <article class="cor-dashboard-detailed-item" category="${item.category}">

                <p class="cor-dashboard-detailed-item__contenttype">${item.contenttype}</p>
                
                <img src="${item.picture}" />
                
                <div class="cor-dashboard-detailed-item__container"> 

                    <!-- EN -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="EN">
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
                    <!-- /EN -->
                    
                    <!-- FR -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="FR">
                        <h1 class="cor-dashboard-article__title">FR ${item.title}</h1>
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
                    <!-- /FR -->
                    
                    <!-- DE -->
                    <div class="cor-dashboard-detailed-item__content" data-lang="DE">
                        <h1 class="cor-dashboard-article__title">DE ${item.title}</h1>
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
                    <!-- /DE -->
                </div>

                <ul class="cor-dashboard-detailed-item__languages-list">
                    
                        ${item.languages.map( language => `
                            <li class="cor-dashboard-detailed-item__languages-list__item">
                                <a href="#">
                                    <div class="cor-dashboard-languages-overview" data-status="${language.status}">
                                        <span title="language" data-lang="${language.label}">${language.label}</span>
                                    </div>
                                </a>
                            </li>
                        `).join('')}
                        
                    </ul>

            </article>
              
            
            
              ` ).join('')}

            <cor-dashboard-pagination class="cor-dashboard-pagination"></cor-dashboard-pagination>
            
        `
    },

    css() {
        return `
            
        `
    }
}