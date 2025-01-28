const apiKey = 'Yf74bc7f093218ecccdd7ec473bea841c';
const city = 'Mumbai';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&appid=f74bc7f093218ecccdd7ec473bea841c`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const labels = data.list.map(item => new Date(item.dt_txt).toLocaleString());
        const temperatures = data.list.map(item => item.main.temp);

        createChart(labels, temperatures);
    })
    .catch(error => console.error('Error fetching weather data:', error));
