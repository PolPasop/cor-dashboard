export default {
    barChart(data, selector) {
        console.log(arguments);
        if(!data) return `${console.error("no data")}`;
        if(!selector) return `${console.error("no selector")}`;

        console.log(selector);

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.total)])
            .range([0, 200]);


            d3.select(document.querySelector(selector)).style("background", "red");
        
        /*
        
         d3.select(document.querySelector(selector))
            .selectAll("div")
            .data(data)
        .enter().append("div").append("div")
        .transition()
        .duration(1000)
        .style("height", d => x(d.total) + "px")
        .text( d => d.label);
        */
        
    }
}