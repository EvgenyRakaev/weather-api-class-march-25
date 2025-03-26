import React, {useEffect, useState} from 'react';
import DescriptionCards from './components/DescriptionCards';
import {getWeatherData} from "./WeatherService";
import {WeatherData} from "./WeatherService";

// interface объект
// interface WeatherData {
//     name: string;
//     temp: number;
//     fells_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     humidity: number;
//     speed: number;
//     country: string;
//     sunrise: number;
//     sunset: number;
//     icon: string;
//     description: string;
//     iconUrl: string;
// }
//

// type разные данные
type Units = "metric" | "imperial";

function App() {

    const [city, setCity] = useState('Miami');
    const [units, setUnits] = useState<Units>('metric');
    const [weather, setWeather] = useState<WeatherData | null>(null)

    useEffect(() => {
        const fetchGetWeatherData = async () => {
            const data = await getWeatherData(city, units);
            setWeather(data);
        }
        fetchGetWeatherData();

    }, [units, city])

    return (
        <div className="App">

            <div className="overlay">
                {
                    weather && (
                        <div className="container">

                            {/*Section 1, input + button (metric / imperial)*/}
                            <div className="section section_input">

                                <input
                                    type="text"
                                    placeholder="Enter city..."
                                    // todo onKeyDown={}
                                />

                                <button>°F</button>

                            </div>

                            {/*Section 2, temperature + City Name*/}
                            <div className="section section_temperature">
                                <div className="icon">
                                    <h4>{weather.name}, Country</h4>
                                    <img src={weather.iconUrl} alt="image"/>
                                    <h4>{weather.description}</h4>
                                </div>

                                <div className="temperature">
                                    <h4>Data shown with {units} units</h4>
                                </div>

                            </div>

                            {/*Section 3, description Cards*/}
                            <DescriptionCards
                                weather={weather}
                                units={units}
                            />


                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
