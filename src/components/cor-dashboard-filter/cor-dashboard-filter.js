const data = [
    {
        name: "Themes",
        items: [
            "theme1",
            "theme2",
            "theme3"
        ]
    },
    {
        name: "Date",
        items: [
            "Date 1",
            "Date 2",
            "Date 3"
        ]
    }
]

import Template from './template.js';

export default class CorDashboardFilter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open' });
        this.shadowRoot.innerHTML = Template.render(data);
    }

    connectedCallback() {
        console.log("The filter is ready");
        this._collapse;
        this._trigger = this.shadowRoot.querySelector('[data-target]');
        if (!this._trigger)
            return;
        this._target = this.shadowRoot.querySelector(`${this._trigger.dataset.target}`);
        if (!this._target)
            return;
        this._trigger.addEventListener('click', this._onClick);
    }

    _onClick(event) {
        console.log("clickkk");
        this._toggleExpanded();
    }
    
    _toggleExpanded() {
        
        this.expanded = !this.expanded;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                expanded: this.expanded,
            },
            bubbles: true,
        }));
    }

    get expanded() {
        return this.hasAttribute('expanded');
    }

    set expanded(value) {
        const isExpanded = Boolean(value);
        if (isExpanded)
          this.setAttribute('expanded', '');
        else
          this.removeAttribute('expanded');
      }

      attributeChangedCallback(name, oldValue, newValue) {
        const hasValue = newValue !== null;
        this.setAttribute('aria-checked', hasValue);
      }
}

if (!customElements.get('cor-dashboard-filter')) {
    customElements.define('cor-dashboard-filter', CorDashboardFilter);
}