const apiKey = '6b84ee617eea3abab2f30f89e09e2cfe';

const chamberLatitude = -83.70;
const chamberLongitude = 9.36;

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

async function getNextThreeDaysForecast() {
    const forecastData = await fetchThreeDayForecast();
    const forecastList = forecastData.list;

    const today = new Date().getDay();

    const nextThreeDaysForecast = [];

    let nextDayIndex = today;
    for (let i = 0; i < 3; i++) {
        const forecast = forecastList.find(item => new Date(item.dt * 1000).getDay() === nextDayIndex);
        if (forecast) {
            nextThreeDaysForecast.push(forecast);
        }
        nextDayIndex = (nextDayIndex + 1) % 7;
    }

    return nextThreeDaysForecast;
}

// Function to display the forecast data
async function displayForecast() {
    const forecastData = await getNextThreeDaysForecast();

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

displayForecast();
