export default {
  render() {
    return `
            ${this.html()}
        `;
  },

  html() {
    return `
        <ul class="cor-dashboard-filter__list cor-dashboard-filter__list--date">
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="today"
          >
            Today
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thisweek"
          >
            This week
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thismonth"
          >
            This month
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <a
            class="cor-dashboard-filter__list__item__link "
            href="#"
            data-filter="thisyear"
          >
            This year
          </a>
        </li>
      
        <li class="cor-dashboard-filter__list__item">
          <div class="form-group">
            <label for="start">Start date:</label><input
              class="form-control"
              type="date"
              id="start"
              name="date-start"
              value="2018-07-22"
            />
          </div>
          <div class="form-group">
            <label for="start">End date:</label><input
              class="form-control"
              type="date"
              id="end"
              name="date-end"
              value="2018-07-22"
            />
          </div>
        </li>
      </ul>
      <button class="cor_button btn cor_button--after cor-dashboard-filtersbtn">Apply selection</button>
        `;
  },
};
