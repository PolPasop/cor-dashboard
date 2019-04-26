import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardBarChart extends Component {
    constructor() {
        super();
        this.innerHTML = Template.render();
    }

    connectedCallback() {
        const data = this.parentNode.getAttribute("data-data");
        this.chart(JSON.parse(data), this);
        this.classList.add('visible');
    }

    chart(data, target) {

        // Sort Data
        data.sort( (a, b) => (a.total < b.total) ? 1 : -1 );

        var height = 200,
            barOffset = 20;

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => {
                return d.total;
            })])
            .range([0, height]);

        // Creation of the chart
        d3.select(target.querySelector(".chart"))
            .attr('height', height)
            .selectAll('div').data(data)
            .enter().append('div').append('div')
            .style('height', d => yScale(d.total) + "px")
            .append('span').text( d => `${d.label} ${d.total}`);
    
        

        // Creation of the list
        d3.select(this)
            .append('ol')
            .classed('js-cor-dashboard-barchart__list', true)
            .selectAll(null)  
            .data(data)
            .enter()
            .append('li')
            .append('a')
            .attr('href', d => `#${d.label}`)
            .html(d => `<span>${d.label}</span> <strong>${d.total}</strong>`)
            .append('span');
        
    }

}

if(!customElements.get('cor-dashboard-bar-chart')) {
    customElements.define('cor-dashboard-bar-chart', CorDashboardBarChart);
}