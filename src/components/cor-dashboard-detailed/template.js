export default {
    render(data) {
        return `
            ${ this.html(data) }
            ${ this.css() }
        `
    },

    html(data) {
        return `
            <p class="cor-dashboard-detailed__title">
            ${data.length} News
                <select>
                    <option value="">Sort by</option>
                    <option value="date">Date</option>
                </select>
            </p>

            ${data.map( item => `
              
              <cor-dashboard-detailed-item>
                    <span slot="contenttype">${item.contenttype}</span>
                    <span slot="title">${item.title}</span>
                    <span slot="date">${item.date}</span>
                    <span slot="theme" class="cor-dashboard-detailed-item__theme">${item.theme}</span>
                    <span slot="label">${item.label}</span>
                    <img slot="picture" src="${item.picture}" />
                    <span slot="intro">${item.intro}</span>
                    
                    
                    ${item.languages.map( language => `
                      <li class="cor-dashboard-detailed-item__languages-list__item" slot="language">
                        <cor-dashboard-languages-overview data-status="${language.status}">
                          <span slot="language-label" title="language">${language.label}</span>
                        </cor-dashboard-languages-overview>
                      </li>
                    `).join('')}
                    
  
              </cor-dashboard-detailed-item>
            
              ` ).join('')}
            
        `
    },

    css() {
        return `
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-detailed/cor-dashboard-detailed.css" />
        `
    }
}