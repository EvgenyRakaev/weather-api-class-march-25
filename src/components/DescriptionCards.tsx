import {WeatherData} from "../WeatherService";
import {FaTemperatureArrowUp, FaTemperatureArrowDown, FaTemperatureHalf} from "react-icons/fa6";
import {LuWind} from "react-icons/lu";
import {WiHumidity, WiBarometer} from "react-icons/wi";
import React from "react";
import {IconType} from "react-icons";

interface DescriptionCardsProps {
    weather: WeatherData;
    units: "metric" | "imperial";
}


interface CardItem {
    id: number;
    title: string;
    data: string | number;
    icon?: React.ReactNode;
    unit: string;
}


const DescriptionCards: React.FC<DescriptionCardsProps> = ({weather, units}) => {

    const tempUnits = units === "metric" ? "°C" : "°F";
    const pressureUnits: "hPa" = "hPa";
    const humidityUnits = "%";
    const windSpeedUnits = "m/s";

    const IconComponent: React.FC<{ icon: IconType }> = ({icon}) => {
        return React.createElement(icon as React.FC);
    };


    const cards: CardItem[] = [
        {
            id: 1,
            title: "Max temp",
            data: weather.temp_max,
            unit: tempUnits,
            icon: <IconComponent icon={FaTemperatureArrowUp}/>,
            // todo icon: react icons element
        },
        {
            id: 2,
            title: "Min temp",
            data: weather.temp_min,
            unit: tempUnits,
            icon: <IconComponent icon={FaTemperatureArrowDown}/>,
        },
        {
            id: 3,
            title: "Fells like",
            data: weather.feels_like,
            unit: tempUnits,
            icon: <IconComponent icon={FaTemperatureHalf}/>,
        },
        {
            id: 4,
            title: "Pressure",
            data: weather.pressure,
            unit: pressureUnits,
            icon: <IconComponent icon={WiBarometer}/>,
        },
        {
            id: 5,
            title: "Humidity",
            data: weather.humidity,
            unit: humidityUnits,
            icon: <IconComponent icon={WiHumidity}/>,

        },
        {
            id: 6,
            title: "Wind speed",
            data: weather.speed,
            unit: windSpeedUnits,
            icon: <IconComponent icon={LuWind}/>,

        }
    ]

    return (
        <div className="section section_description_cards">
            {cards.map(({id, title, data, unit, icon}) => (
                <div key={id} className="card">

                    {icon}

                    {title}:&nbsp;&nbsp;

                    {`${data} ${unit}`}

                </div>
            ))}
        </div>
    )
}

export default DescriptionCards;