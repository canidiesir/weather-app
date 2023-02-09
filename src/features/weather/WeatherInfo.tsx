import { FC, useEffect, useState } from "react";
import { ICoords } from "../location/locationTypes";
import { useWeatherInfo } from "./useWeatherInfo";
import WeatherComponent from "./WeatherComponent";
import WeatherHeader from "./WeatherHeader";
import './css/WeatherInfo.css'

const WeatherInfo : FC<{location: ICoords}> = ({location}) => {
    const info = useWeatherInfo(location);

    return (   
        <>
            {info != undefined && <div className="weather-details">
                <WeatherHeader location={info.location} weather={info.weather} temp={info.temp} feels_like={info.feels_like}></WeatherHeader>
                
                <div className="additional-infos">
                    <WeatherComponent title = "Humidity" value={info.humidity + "%"} imgSrc="/src/assets/humidity.png"></WeatherComponent>
                    <WeatherComponent title = "Wind speed" value={info.wind_speed + " m/s"} imgSrc="/src/assets/wind.png"></WeatherComponent>
                    <WeatherComponent title = "Visibility" value={info.visibility + " m"} imgSrc="/src/assets/visibility.png"></WeatherComponent>
                </div>
            </div>}
        </>
    );
}

export default WeatherInfo;