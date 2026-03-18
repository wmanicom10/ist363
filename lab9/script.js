async function fetchData() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.05005612832071&longitude=-76.1469198697371&current=precipitation,temperature_2m,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch');

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        const precipitation = data.current.precipitation;
        const temperature = data.current.temperature_2m;
        const cloudCover = data.current.cloud_cover;

        document.getElementById('precipitation').textContent = "Precipitation: " + precipitation + '"';
        document.getElementById('temperature').textContent = "Temperature: " + temperature + '°F';

        const cloudEmoji = cloudCover > 50 ? '☁️' : '☀️';
        document.getElementsByClassName('emoji')[0].textContent = cloudEmoji;

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();