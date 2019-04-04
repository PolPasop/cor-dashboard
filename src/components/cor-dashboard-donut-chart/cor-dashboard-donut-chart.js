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


  const seedData2 = [{
    "label": "News2",
    "value": 8,
    "link": "https://facebook.github.io/react/"
  }, {
    "label": "Events",
    "value": 10,
    "link": "https://redux.js.org/"
  }, {
    "label": "Opinions",
    "value": 250,
    "link": "https://vuejs.org/"
  }, {
    "label": "Studies",
    "value": 85,
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
        this.chart(seedData);
        
    }

    addTooltip() {
      const tooltip = document.createElement("div");
      document.querySelector("body").appendChild(tooltip).classList.add("toolTip");

    }



    chart(chartData) {
        this.addTooltip();

        chartData.sort( (a, b) => (a.value < b.value) ? 1 : -1 );

        // Define size & radius of donut pie chart
        const width = 200;
        const height = 200;
        const radius = Math.min(width, height) / 2;

        const updateChart = event => {
          console.log(event);
          this.parentNode.setAttribute('view', event.data.label);
          tooltip.style.display = "none";
        };

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
        .value( d => d["value"])
        .sort(null);

        const tooltip = document.querySelector('.toolTip');

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
        .data(pie(chartData))
        .enter().append("g")
        .attr("class", "arc")
            
        // Make each arc clickable 
        .on("click", updateChart)


        // Append the path to each g
        g.append("path").transition()
        .attr("d", arc)
        .attr("fill", function(d, i) {
            return colour(i);
        });

      function handleMouseOver(d, i) { 
        
        const el = d3.select(this).select("path");
        el.attr('opacity', '0.75');
        
        
        tooltip.style.left = d3.event.pageX+10+"px";
        tooltip.style.top = d3.event.pageY-25+"px";
        tooltip.style.display = "inline-block";
        tooltip.innerHTML = (d.data.label)+"<br>"+(d.data.value);
      };

      function handleMouseOut(d, i) { 
        const el = d3.select(this).select("path");
        el.attr('opacity', '1');
        tooltip.style.display = "none";
      };

      g.on("mousemove", handleMouseOver);
      g.on("mouseout", handleMouseOut);





      d3.select(this)
        .append('ol').classed('js-cor-dashboard-donut-chart__list', true)
        .selectAll(null)  
        .data(chartData)
        /* .sort(function(a,b) { return +a.value - +b.value }) */
        .enter()
        .append('li')
        .append('a')
        .attr('href', d => `#${d.label}`)
        .html(d => `<span>${d.label}:</span> <strong>${d.value}</strong>`)
        .on("click", updateChart)
        .append('span')
        .style("background-color", function(d, i) {
            return colour(i);
        });

      

    }

}

if (!customElements.get('cor-dashboard-donut-chart')) {
    customElements.define('cor-dashboard-donut-chart', CorDashboardDonutChart);
}