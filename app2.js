//FOR BAR GRAPH 

document.addEventListener("DOMContentLoaded", function(){
    const apiKey = "6gR7eApMZgrLSRDbUsshjwza78UIFiP2aw2Xw5QO";

    const apiURL = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKey}`;

    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {

        const dates = Object.keys(data.near_earth_objects);

        const counts = dates.map((date) => 
        data.near_earth_objects[date].length);

        const svgHeight = 400;
        const svgWidth = 800;
        const margin = {top:20, right:20, bottom:80, left:40};

        const height = svgHeight - margin.top - margin.bottom;
        const width = svgWidth - margin.left - margin.right;

        const svg = d3
        .select("#bargraph")
        .append("svg")
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleBand().range([0, width]).padding(0.4);
        const y = d3.scaleLinear().range([height, 0]);

        x.domain(dates);
        y.domain([0, d3.max(counts)]);

        svg
        .selectAll(".bar")
        .data(counts)
        .enter()
        .append("rect")
        .attr('class', "bar")
        .attr('x', (d, i) => x(dates[i]))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y(d))
        .attr('height', (d) => height - y(d));

        svg.selectAll(".asteroid-image")
        .data(data)
        .enter()
        .append("image")
        .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2 - 10) // Adjust the positioning of the images
        .attr("y", d => yScale(d.value) - 30) // Adjust the positioning of the images
        .attr("width", 20) // Adjust the image size as needed
        .attr("height", 20)
        .attr("xlink:href", d => d.image)
        .attr("class", "asteroid-image");

        svg 
        .append("g")
        .attr('transform', "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr('transform', "rotate(-65)")
        .style('text-anchor', 'end')

        svg
        .append("text")
        .attr('transform', "translate(" + width / 2 + " ," + (height + margin.top + 50) + ")")
        .style('text-anchor', 'middle')
        .style('fill', 'white')
        .text("Date (closest approach date of asteroids to earth)");

        svg.append("g")
        .call(d3.axisLeft(y).ticks(5));

        svg
        .append("text")
        .attr('transform', "rotate(-90)")
        .attr('y', 0 - margin.left)
        .attr('x', 0 - height/2)
        .attr('dy', "1em")
        .style('text-anchor', 'middle')
        .style('fill', 'white')
        .text("Number of Asteroids");

    });

});