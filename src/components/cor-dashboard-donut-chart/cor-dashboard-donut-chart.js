import Component from '../component.js';
import Template from './template.js';

const seedData = [{
    "label": "News",
    "value": 80,
    "link": "https://facebook.github.io/react/"
  }, {
    "label": "Events",
    "value": 100,
    "link": "https://redux.js.org/"
  }, {
    "label": "Opinions",
    "value": 25,
    "link": "https://vuejs.org/"
  }, {
    "label": "Studies",
    "value": 15,
    "link": "https://angularjs.org/"
  }, {
    "label": "Brochures",
    "value": 5,
    "link": "https://meteorhacks.com/meteor-js-web-framework-for-everyone"
  }];

export default class CorDashboardDonutChart extends Component {
    constructor() {
        super();
        this.innerHTML = Template.render();
    }

    connectedCallback() {
        this.chart();
    }

    chart() {

        // Define size & radius of donut pie chart
        const width = 200;
        const height = 200;
        const radius = Math.min(width, height) / 2;

        // Define arc colours
        const colour = d3.scaleOrdinal(d3.schemeCategory10);

        // Define arc ranges
        const arcText = d3.scaleOrdinal()
        .range([0, width]);

        // Determine size of arcs
        const arc = d3.arc()
        .innerRadius(radius - 50)
        .outerRadius(radius - 10);

        // Create the donut pie chart layout
        const pie = d3.pie()
        .value(function (d) { return d["value"]; })
        .sort(null);

        // Append SVG attributes and append g to the SVG
        const svg = d3.select(this.querySelector("svg"))
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")");

        // Define inner circle
        svg.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 100)
        .attr("fill", "#fff") ;

        

        // Calculate SVG paths and fill in the colours
        const g = svg.selectAll(".arc")
        .data(pie(seedData))
        .enter().append("g")
        .attr("class", "arc")
            
        // Make each arc clickable 
        .on("click", function(d, i) {
          window.location = seedData[i].link;
        });

        // Append the path to each g
        g.append("path")
        .attr("d", arc)
        .attr("fill", function(d, i) {
            return colour(i);
        });

        // Lines
        g.append("g")
          .attr("class", "lines");
          
        var polyline = svg.select(".lines").selectAll("polyline")
          .data(pie(seedData), key);
      
          polyline.enter()
          .append("polyline");

        

        
        
    }

}

if (!customElements.get('cor-dashboard-donut-chart')) {
    customElements.define('cor-dashboard-donut-chart', CorDashboardDonutChart);
}