import CodDashboardFilter from '../cor-dashboard-filter/cor-dashboard-filter.js';

export default {
  render() {
    return `${this.css()}
    ${this.html()}`;
  },

  html() {
    return `
    <p>sidebar</p>
    <div class="cor-dashboard-filter">
      <h2 class="cor-dashboard-filter__title"></h2>
      <ul class="cor-dashboard-filter__list">

          <li class="cor-dashboard-filter__list__item">
              <a class="cor-dashboard-filter__list__item__link" href="{{ item.link }}">
                <cor-dashboard-filter></cor-dashboard-filter>
              </a>
          </li>
      </ul>
  </div>

  <div class="cor-dashboard-filter">
      <h2 class="cor-dashboard-filter__title">Name of the filter</h2>
      <ul class="cor-dashboard-filter__list">
          <li class="expandable">
              <a class="cor-dashboard-filter__list__item__link" href="#">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0267 2.11765L9.6 0H0V18H2.13333V10.5882H8.10667L8.53333 12.7059H16V2.11765H10.0267Z" fill="#787878"/>
                  </svg>

                  First
              </a>
              <ul>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
              </ul>
          </li>
          <li>
              <a class="" href="#">
                  First
              </a>
          </li>
          <li>
              <a class="" href="#">
                  First
              </a>
          </li>
      </ul>
  </div>

  <div class="cor-dashboard-filter">
      <h2 class="cor-dashboard-filter__title">
        <a class="cor-dashboard-filter__list__item__link" href="#" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0267 2.11765L9.6 0H0V18H2.13333V10.5882H8.10667L8.53333 12.7059H16V2.11765H10.0267Z" fill="#787878"/>
            </svg>
            First
        </a>
      </h2>
      <ul class="cor-dashboard-filter__list" id="collapseExample">
          <li class="">
              <ul>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
              </ul>
          </li>
          <li>
              <a class="" href="#">
                  First
              </a>
          </li>
          <li>
              <a class="" href="#">
                  First
              </a>
          </li>
      </ul>
  </div>


    `
  },

  css() {
    return `
      <link rel="stylesheet" href="src/components/cor-dashboard-filter/cor-dashboard-filter.css"/>
    `
  }
}