// Replace 'YOUR_API_KEY' with your actual NASA API key
const apiKey = 'FnWSKo4tBlLb4wM2A4q9cYmaZ0IEEB5yQfVrWah2';

// Function to fetch asteroid data from NASA NeoWs API
async function fetchAsteroidData() {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`);
    const data = await response.json();
    return data.near_earth_objects;
}

// Function to position and scale asteroids with spacing based on their actual distance and limit to 9
async function positionAsteroids() {
    const earth = document.getElementById("earth");
    const asteroidContainer = document.getElementById("asteroid-container");

    try {
        const asteroidData = await fetchAsteroidData();

        // Calculate the maximum and minimum distances
        const maxDistance = Math.max(...asteroidData.map((asteroid) => parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)));
        const minDistance = Math.min(...asteroidData.map((asteroid) => parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)));

        // Limit the number of asteroids to 9
        const limitedAsteroidData = asteroidData.slice(0, 9);

        // Calculate the minimum spacing between asteroids
        const minSpacing = 50; // Adjust as needed

        limitedAsteroidData.forEach((asteroid, index) => {
            const distance = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers);

            // Calculate the angle to distribute asteroids uniformly around the Earth
            const angle = (index / limitedAsteroidData.length) * 360;

            // Calculate the x and y positions for a circular orbit
            const scaledDistance = (distance - minDistance) / (maxDistance - minDistance) * 300;
            const x = earth.offsetWidth / 2 + (scaledDistance + index * minSpacing) * Math.cos(angle * (Math.PI / 180));
            const y = earth.offsetHeight / 2 + (scaledDistance + index * minSpacing) * Math.sin(angle * (Math.PI / 180));

            const asteroidElement = document.createElement("div");
            asteroidElement.className = "asteroid";

            // Scale the size of the asteroid (adjust size as needed)
            const asteroidSize = 68 + (index * 10);
            asteroidElement.style.width = `${asteroidSize}px`;
            asteroidElement.style.height = `${asteroidSize}px`;

            asteroidElement.style.left = `${x}px`;
            asteroidElement.style.top = `${y}px`;

            // Apply rotation animation with different durations for each asteroid
            asteroidElement.style.animation = `rotate ${3 + Math.random() * 8}s linear infinite`; // Adjust the duration range as needed


            asteroidContainer.appendChild(asteroidElement);

            
        });
    } catch (error) {
        console.error("Error fetching asteroid data:", error);
    }
}

positionAsteroids();

const asteroids = document.querySelectorAll(".asteroid");
const tooltip = document.getElementById("tooltip");

asteroids.forEach((asteroid) => {
    asteroid.addEventListener("mouseenter", () => {
        tooltip.textContent = asteroid.getAttribute("data-tooltip");
    });

    asteroid.addEventListener("mouseleave", () => {
        tooltip.textContent = "";
    });
});

