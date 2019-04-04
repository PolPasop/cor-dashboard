import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardChart extends Component {
    constructor() {
        super();
        
        // Get the type of chart
        const typeOfChart = this.dataset.charttype;

        this.innerHTML = Template.render(typeOfChart);
    }

    resetState() {
        this.innerHTML = "";
        this.innerHTML = Template.render()
    }

    backBtn() {
        const btn = this.querySelector("#cor-dashboard-chart__backbtn");
        btn.addEventListener('click', ev => this.resetState(ev));
    }

    connectedCallback() {

        const view = "view";
        const update = () => {
            this.innerHTML = Template.render("barChart");
            this.backBtn();
        }

        new MutationObserver(update).observe(this, {
            attributes: true,
            attributeFilter: [view]
        })
    }
}

if (!customElements.get('cor-dashboard-chart')) {
    customElements.define('cor-dashboard-chart', CorDashboardChart);
}