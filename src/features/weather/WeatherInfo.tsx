import { FC, useEffect, useState } from "react";
import { ICoords } from "../location/locationTypes";
import { useFetch } from "./useFetch";

const WeatherInfo : FC<{location: ICoords}> = ({location: location}) => {
    const info = useFetch(location);

    return (   
        <>
            {info != undefined && <div>
                <p>{info.location}</p>
                <p>{info.weather}</p>
                <p>Temperature: {info.temp}°C</p>
                <p>Feels like: {info.feels_like}°C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Pressure: {info.pressure}</p>
                <p>Wind Speed: {info.wind_speed}</p>
                <p>Visibility: {info.visibility}</p>
            </div>}
        </>
    );
}

export default WeatherInfo;