import Component from '../component.js';
import Template from './template.js';

const dataa = [4, 8, 15, 16, 23, 42];

const data = [
    {
        label: "EN",
        total: 4
    },
    {
        label: "FR",
        total: 40
    },
    {
        label: "DU",
        total: 20
    },
    {
        label: "IT",
        total: 1
    },
    {
        label: "ES",
        total: 33
    }
];

export default class CorDashboardBarChart extends Component {
    constructor() {
        super();
        this.innerHTML = Template.render();
    }

    connectedCallback() {
        this.chart();
    }

    chart() {

      
        
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.total)])
            .range([0, 200]);
        
        
        d3.select(this.querySelector(".chart"))
            .selectAll("div")
            .data(data)
        .enter().append("div").append("div")
        .transition()
        .duration(1000)
        .style("height", d => x(d.total) + "px")
        .text( d => d.label);
        
    }
}

if(!customElements.get('cor-dashboard-bar-chart')) {
    customElements.define('cor-dashboard-bar-chart', CorDashboardBarChart);
}