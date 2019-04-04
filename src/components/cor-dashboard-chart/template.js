import CorDashboardDonutChart from '../cor-dashboard-donut-chart/cor-dashboard-donut-chart.js'
import CorDashboardBarChart from '../cor-dashboard-bar-chart/cor-dashboard-bar-chart.js'

export default {
    render(chart) {
        return `
            ${this.css()}
            ${this.html(chart)}
        `
    },

    html(chart) {
        switch (chart) {
            case "barChart":
                return `
                <button id="cor-dashboard-chart__backbtn">Back</button>
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