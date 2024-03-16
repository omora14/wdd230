// Define your OpenWeatherMap API key
const apiKey = '6b84ee617eea3abab2f30f89e09e2cfe';

// Chamber location coordinates
const chamberLatitude = -83.70; // Example latitude
const chamberLongitude = 9.36; // Example longitude

// Function to fetch three-day forecast data
async function fetchThreeDayForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${chamberLatitude}&lon=${chamberLongitude}&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

// Function to get the next three days forecast
async function getNextThreeDaysForecast() {
    const forecastData = await fetchThreeDayForecast();
    const forecastList = forecastData.list;

    // Get today's day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const today = new Date().getDay();

    // Create an array to store the next three days forecast
    const nextThreeDaysForecast = [];

    // Iterate through the forecast to find the next three days
    let nextDayIndex = today;
    for (let i = 0; i < 3; i++) {
        const forecast = forecastList.find(item => new Date(item.dt * 1000).getDay() === nextDayIndex);
        if (forecast) {
            nextThreeDaysForecast.push(forecast);
        }
        nextDayIndex = (nextDayIndex + 1) % 7; // Increment day index and wrap around if needed
    }

    return nextThreeDaysForecast;
}

// Function to display the forecast data
async function displayForecast() {
    const forecastData = await getNextThreeDaysForecast();

    // Display the forecast within current-temp element
    const currentTempElement = document.getElementById('current-temp');
    forecastData.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = forecast.main.temp;
        const weatherIcon = forecast.weather[0].icon;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');

        const dayElement = document.createElement('p');
        dayElement.textContent = `${day}: ${temp}°F`;
        forecastItem.appendChild(dayElement);

        const iconElement = document.createElement('img');
        iconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
        iconElement.alt = forecast.weather[0].description;
        forecastItem.appendChild(iconElement);

        currentTempElement.appendChild(forecastItem);
    });
}

// Call the function to display the forecast data
displayForecast();
