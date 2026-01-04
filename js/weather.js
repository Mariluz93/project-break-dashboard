//función que traiga datos (fetch, json)
//función que pinta el DOM (una para la previsión actual y otra para la previsión)
//función: llama a la función fetch espera datos y llama a las funciones que pintan

const currentWeather = document.getElementById('currentWeather');
const forecastWeather = document.getElementById('forecastWeather');

const weatherInfo = async () => {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d2a98bb220a845b1924135455252212&q=Madrid&aqi=no');
        if (!response.ok) {
            throw new Error('Ha surgido un error:', response.status);
        }
        return await response.json();

    } catch (error) {
        console.log('Error al obtener la información', error);
    }
};

const currentWeatherDOM = (data) => {
    const { location, current, forecast } = data;
    const { name: city, country } = location;
    const { temp_c, condition, humidity, wind_kph } = current;
    const { text: weatherText, icon: weatherIcon } = condition;
    
    const currentHour = new Date().getHours();
    const dailyChanceRain = forecast.forecastday[0].hour[currentHour].chance_of_rain;
    
    currentWeather.innerHTML = `
        <h2>${city}/${country}</h2>
        <p>${weatherText}</p>
        <div class="current-data">
            <div class="current-grades">
                <img  src="https:${weatherIcon}" class="weather-icon" alt="${weatherText}">
                <div>
                    <p>${temp_c}</p>
                    <img src="../assets/img/celsius.png" alt="grados">
                </div>
            </div>
            <ul>
                <li>Precipitaciones: ${dailyChanceRain}%</li>
                <li>Humedad: ${humidity}%</li>
                <li>Viento: ${wind_kph} Km/h</li>
            </ul>
        </div>
    `;
};

const forecastWeatherDOM = (hourlyWeather) => {
    let hoursHTML = "";
    
    hourlyWeather.forEach((hour) => {
        const { time, temp_c, condition, chance_of_rain } = hour;
        const { text, icon } = condition;
        const justHour = time.split(' ')[1];
        
        hoursHTML += `
            <li class="forecast-hour">
                <span>
                    <p>${justHour}</p>
                    <span>
                        <img src="https:${icon}" alt="${text}">
                        <p>${temp_c}ºC</p>
                    </span>
                </span>
            </li>
        `;
    });
                
    forecastWeather.innerHTML = hoursHTML;
};

const getInfo = async () => {
    try {
        const data = await weatherInfo();
        if (!data) return;

        currentWeatherDOM(data);

        const hourlyForecast = data.forecast.forecastday[0].hour;
        forecastWeatherDOM(hourlyForecast);

    } catch (error) {
        console.log('Error al obtener la información', error);
    }        
};

getInfo()
            