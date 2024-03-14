const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=6b84ee617eea3abab2f30f89e09e2cfe&units=imperial&units=imperial';


    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong> ${weatherData.main.temp.toFixed(0)}</strong>`;

    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    const desc = weatherData.weather[0].description;

    let mainWeather = weatherData.weather[0].main;

    if (mainWeather == 'Snow') {
        iconsrc = `images/snow.png`;
    }
    else if (mainWeather == 'Clear') {
        iconsrc = `images/sunny.png`;
    }
    else if (mainWeather == 'Night') {
        iconsrc = `images/night.png`;
    }
    else if (mainWeather == 'Clouds') {
        iconsrc = `images/cloudy.png`;
    }
    else if (desc == 'sleet') {
        iconsrc = `images/sleet.png`;
    }
    else if (desc == 'Rain') {
        iconsrc = `images/drizzle.png`;
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}