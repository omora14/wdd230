function calculateWindChill() {
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    var windSpeed = parseFloat(document.getElementById('windSpeedInput').value);

    if (temperature <= 50 && windSpeed >= 3.0) {
        var windChill = calculateWindChillIndex(temperature, windSpeed);
        document.getElementById('wind-chill').innerText = windChill.toFixed(2);
    } else {
        document.getElementById('wind-chill').innerText = "N/A";
        alert("Wind chill cannot be calculated with the given temperature and wind speed.");
    }
}

function calculateWindChillIndex(temperature, windSpeed) {
    var windChillIndex = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChillIndex;
}
