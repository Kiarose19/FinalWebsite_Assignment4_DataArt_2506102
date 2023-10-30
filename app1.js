document.addEventListener("DOMContentLoaded", function(){
    const apiKey = "6gR7eApMZgrLSRDbUsshjwza78UIFiP2aw2Xw5QO";

    const apiURL = `https://eonet.gsfc.nasa.gov/api/v2.1/events ?limit=5api_key = ${apiKey}`

    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {

        const events = data.events;

        const formattedData = events.map((event) => {
            date: new Date(event.geometry[0].date),
            value; event.geometry[0].coordinates[2];


        const svgHeight = 500;
        const svgWidth = 800;
        const margin = {top:30, right:30, bottom:80, left:40};

        const height = svgHeight - margin.top - margin.bottom;
        const width = svgWidth - margin.left - margin.right;

        const svg = d3
        .select("#root")
        .append("svg")
        .attr('width', svgWidth)
        .attr('height', svgHeight)
        .append("g")
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.x)])
        .range([0, width]);

        const yScale = d3
       .scaleLinear()
       .domain([0, d3.max(data, (d) => d.y)])
       .range([height, 0]); 

       const line = d3
       .line()
       .x((d) => xScale(d.x))
       .y((d) => yScale(d.y));
     
       d3.select("svg")
       .append("path")
       .datum(data)
       .attr('class', "line")
       .attr('d', line);

       svg
       .append("g")
       .attr('transform', "translate(0," + height + ")")
       .call(d3.axisBottom(x))
       .selectAll("text")
       .attr('transform', "rotate(-65)")
       .style("text-anchor" , "end");

       svg
       .append("text")
       .attr('transform', "translate(" + width / 2 + " ," + (height + margin.top + 50) + ")")
       .style('text-anchor', 'middle')
       .text("Date");

       svg.append("g")
       .call(d3.axisLeft(y).ticks(5));

       svg
       .append("text")
       .attr('transform', "rotate(-90)")
       .attr('y', 0 - margin.left)
       .attr('x', 0 - height/2)
       .attr('dy', "1em")
       .style('text-anchor', 'middle')
       .text("Number of Asteroids");

        })
     
    })
})


//DIMENSIONS
let height = 500;
width = 1000;
margin = {top: -40, right: 60, bottom: 50, left: 400};

//CREATE SVG
let svg = d3.select('#root')
.append("svg")
.attr('height', height)
.attr('width', width)
.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`);

//let rScale = d3.scaleSqrt().domain([10, 200]).range([20, 100])

//SCALES/AXES
 x = d3.scaleTime()
.range([0, width]);

 y = d3.scaleLinear()
.range([height, 0]);

//CREATE DATA
const data = [
    {date: new Date("5"), value: 16.8},
    {date: new Date("10"), value: 17.4},
    {date: new Date("15"), value: 18},
    {date: new Date("20"), value: 19.9},
  
];



//DEFINE X AND Y DOMAINS
x.domain(d3.extent(data, d => d.date));
y.domain([0, d3.max(data, d => d.value)]);

//ADD THE X-AXIS
svg.append('g')
.attr('transform', `translate(0, ${height})`)
.call(d3.axisBottom(x)
   .ticks(d3.timeMonth.every(1))
   .tickFormat(d3.timeFormat("%b %Y"))
   
);

//ADD THE Y-AXIS
svg.append('g')
.call(d3.axisLeft(y))


//CREATE LINE GENERATOR
const line = d3.line()
.x(d => x(d.date))
.y(d => y(d.value));

//ADD LINE PATH TO SVG
svg.append("path")
.datum(data)
.attr('fill', "none")
.attr('stroke', "blue")
.attr('stroke-width', 2)
.attr('d', line);


