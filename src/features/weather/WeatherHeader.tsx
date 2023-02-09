import { FC } from "react";
import './css/WeatherHeader.css'

interface WeatherHeaderProps { 
    location: string,
    weather: string,
    temp: number,
    feels_like: number
}

const WeatherHeader : FC<WeatherHeaderProps> = (headerProps) => {
    return (<div className="main-info">
             <p className="location">{headerProps.location}</p>
             <p className="temperature">{headerProps.temp}°</p>
             <div className="weather-details">
                <p className="weather">{headerProps.weather}</p>
                <p className="feels-like">Feels like {headerProps.feels_like}°</p>   
             </div>
    </div>);
}

export default WeatherHeader;