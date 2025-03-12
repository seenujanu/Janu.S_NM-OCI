const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-info').innerText = error.message;
    }
}

function displayWeather(data) {
    const { main, weather } = data;
    const weatherInfo = `
        <h2>${data.name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity} %</p>
        <p>Condition: ${weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
