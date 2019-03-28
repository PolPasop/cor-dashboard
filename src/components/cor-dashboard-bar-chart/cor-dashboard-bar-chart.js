import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardBarChart extends Component {
    constructor() {
        super();
        this.innerHTML = Template.render();
    }

    connectedCallback() {
        const data = this.getAttribute("data-data");
        this.chart2(JSON.parse(data), this);
        
        // this.chart(JSON.parse(data));
        /*
        const newdata2 = newdata.substring(0, newdata.length - 1);
        console.log("before:", newdata);
        */
    }

    chart2(data, target) {
        var height = 200,
            barOffset = 20;

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => {
                return d.total;
            })])
            .range([0, height]);

        


        d3.select(target.querySelector(".chart"))
            .attr('height', height)
            .selectAll('div').data(data)
            .enter().append('div').append('div')
                .style('height', d => yScale(d.total) + "px")
                .append('span').text( d => `${d.label} ${d.total}`);
    
        /*d3.select(target.querySelector(".chart"))
            .selectAll("div")
            .data(data)
        .enter().append("div").append("div")
        .transition()
        .duration(1000)
        .style("height", d => {
            console.log(d);
            return x(d.total) + "px";
        })
        .text( d => d.label);
        */
        
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