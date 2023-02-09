import { FC, useEffect, useState } from "react";
import { ICoords } from "../location/locationTypes";
import { useWeatherInfo } from "./useWeatherInfo";
import WeatherComponent from "./WeatherComponent";
import WeatherHeader from "./WeatherHeader";
import './css/WeatherInfo.css';
import humidityLogo from "/src/assets/humidity.png";
import windLogo from "/src/assets/wind.png";
import visibilityLogo from "/src/assets/visibility.png";

const WeatherInfo : FC<{location: ICoords}> = ({location}) => {
    const info = useWeatherInfo(location);

    return (   
        <>
            {info != undefined && <div className="weather-details">
                <WeatherHeader location={info.location} weather={info.weather} temp={info.temp} feels_like={info.feels_like}></WeatherHeader>
                
                <div className="additional-infos">
                    <WeatherComponent title = "Humidity" value={info.humidity + "%"} imgSrc={humidityLogo}></WeatherComponent>
                    <WeatherComponent title = "Wind speed" value={info.wind_speed + " m/s"} imgSrc={windLogo}></WeatherComponent>
                    <WeatherComponent title = "Visibility" value={info.visibility + " m"} imgSrc={visibilityLogo}></WeatherComponent>
                </div>
            </div>}
        </>
    );
}

export default WeatherInfo;