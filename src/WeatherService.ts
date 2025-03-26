export interface WeatherData {
    name: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    speed: number;
    country: string;
    sunrise: number;
    sunset: number;
    description: string;
    iconUrl: string;
}

type Units = "metric" | "imperial"
const API_key: string = "f3f715f6b264b2334623111bc901b583"

// link: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units={units}


const getWeatherData = async (city: string, units: Units = "metric") => {

    const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`;

    const getIconUrl = (iconId: string): string => `https://openweathermap.org/img/wn/${iconId}.png`

    const data = await fetch(URL)
        .then(res => res.json())
        .then((data) => data);


    const {
        name,

        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},

        sys: {country, sunrise, sunset},

        wind: {speed},

        weather,

    } = data;

    const {icon, description} = weather[0];

    return {
        name,
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        sunrise,
        sunset,
        iconUrl: getIconUrl(icon),
        description,

        //todo Icon
    }
}

export {getWeatherData};