import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'

export default {
    render(chart, view) {
        return `
            ${this.css()}
            ${this.html(chart, view)}
        `
    },

    html(chart, view) {
        console.log(chart, view);
        switch (chart) {
            case "barChart2":
                return `
                    <cor-dashboard-bar-chart class="cor-dashboard-bar-chart"></cor-dashboard-bar-chart>
                `;
                break;
            case "barChart":
                return `
                <div class="cor-dashboard-bar-chart__header">
                    <h3>${view}</h3>
                    <a class="cor-dashboard-chart__backbtn cor_button btn" id="cor-dashboard-chart__backbtn">Back</a>
                </div>
                <cor-dashboard-chart class="cor-dashboard-chart" data-charttype="barChart2"  data-data="[{
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
              
      
          
              
                </cor-dashboard-chart>
           
                `;
                break;
            default:
                return `
                    <cor-dashboard-donut-chart class="cor-dashboard-donut-chart"></cor-dashboard-donut-chart>    
                `    
        }
    },

    css() {
        return `

        `
    }
}