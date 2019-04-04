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



    chart(chartData) {

        chartData.sort( (a, b) => (a.value < b.value) ? 1 : -1 );

        // Define size & radius of donut pie chart
        const width = 200;
        const height = 200;
        const radius = Math.min(width, height) / 2;

        const updateChart = () => {
          console.log(this);
          this.innerHTML = `
          <button id="cor-btn">Back</button>
          <cor-dashboard-bar-chart class="cor-dashboard-bar-chart" data-data="[{
            &quot;label&quot;: &quot;BG&quot;,
            &quot;total&quot;: 50},{
            &quot;label&quot;: &quot;CS&quot;,
            &quot;total&quot;: 2},{
            &quot;label&quot;: &quot;DA&quot;,
            &quot;total&quot;: 7},{
            &quot;label&quot;: &quot;DE&quot;,
            &quot;total&quot;: 87},{
            &quot;label&quot;: &quot;EL&quot;,
            &quot;total&quot;: 24},{
            &quot;label&quot;: &quot;EN&quot;,
            &quot;total&quot;: 6},{
            &quot;label&quot;: &quot;ES&quot;,
            &quot;total&quot;: 78},{
            &quot;label&quot;: &quot;ET&quot;,
            &quot;total&quot;: 0},{
            &quot;label&quot;: &quot;FI&quot;,
            &quot;total&quot;: 5},{
            &quot;label&quot;: &quot;FR&quot;,
            &quot;total&quot;: 3},{
            &quot;label&quot;: &quot;GA&quot;,
            &quot;total&quot;: 0},{
            &quot;label&quot;: &quot;HR&quot;,
            &quot;total&quot;: 14},{
            &quot;label&quot;: &quot;HU&quot;,
            &quot;total&quot;: 3},{
            &quot;label&quot;: &quot;IT&quot;,
            &quot;total&quot;: 47},{
            &quot;label&quot;: &quot;LT&quot;,
            &quot;total&quot;: 75},{
            &quot;label&quot;: &quot;LV&quot;,
            &quot;total&quot;: 26},{
            &quot;label&quot;: &quot;MT&quot;,
            &quot;total&quot;: 65},{
            &quot;label&quot;: &quot;NL&quot;,
            &quot;total&quot;: 37},{
            &quot;label&quot;: &quot;PL&quot;,
            &quot;total&quot;: 0},{
            &quot;label&quot;: &quot;PT&quot;,
            &quot;total&quot;: 21},{
            &quot;label&quot;: &quot;RO&quot;,
            &quot;total&quot;: 48},{
            &quot;label&quot;: &quot;SK&quot;,
            &quot;total&quot;: 23},{
            &quot;label&quot;: &quot;SL&quot;,
            &quot;total&quot;: 16},{
            &quot;label&quot;: &quot;SV&quot;,
            &quot;total&quot;: 9}]">
        

    
        
        <div class="chart" height="200">
    
    <div><div style="height: 114.943px;"><span>BG 50</span></div></div><div><div style="height: 4.5977px;"><span>CS 2</span></div></div><div><div style="height: 16.092px;"><span>DA 7</span></div></div><div><div style="height: 200px;"><span>DE 87</span></div></div><div><div style="height: 55.1724px;"><span>EL 24</span></div></div><div><div style="height: 13.7931px;"><span>EN 6</span></div></div><div><div style="height: 179.31px;"><span>ES 78</span></div></div><div><div style="height: 0px;"><span>ET 0</span></div></div><div><div style="height: 11.4943px;"><span>FI 5</span></div></div><div><div style="height: 6.89655px;"><span>FR 3</span></div></div><div><div style="height: 0px;"><span>GA 0</span></div></div><div><div style="height: 32.1839px;"><span>HR 14</span></div></div><div><div style="height: 6.89655px;"><span>HU 3</span></div></div><div><div style="height: 108.046px;"><span>IT 47</span></div></div><div><div style="height: 172.414px;"><span>LT 75</span></div></div><div><div style="height: 59.7701px;"><span>LV 26</span></div></div><div><div style="height: 149.425px;"><span>MT 65</span></div></div><div><div style="height: 85.0575px;"><span>NL 37</span></div></div><div><div style="height: 0px;"><span>PL 0</span></div></div><div><div style="height: 48.2759px;"><span>PT 21</span></div></div><div><div style="height: 110.345px;"><span>RO 48</span></div></div><div><div style="height: 52.8736px;"><span>SK 23</span></div></div><div><div style="height: 36.7816px;"><span>SL 16</span></div></div><div><div style="height: 20.6897px;"><span>SV 9</span></div></div></div></cor-dashboard-bar-chart>
     
          `;
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

        const div = d3.select("body").append("div").attr("class", "toolTip");

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
        
        
        div.style("left", d3.event.pageX+10+"px");
        div.style("top", d3.event.pageY-25+"px");
        div.style("display", "inline-block");
        div.html((d.data.label)+"<br>"+(d.data.value));
      };

      function handleMouseOut(d, i) { 
        const el = d3.select(this).select("path");
        el.attr('opacity', '1');
        div.style("display", "none");
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