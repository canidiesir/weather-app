import { FC, useEffect, useState } from "react";
import { ICoords, IWeather } from "../types/appTypes";

const WeatherInfo : FC<ICoords> = (props) => {
    const [info, setInfo] = useState<IWeather>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${import.meta.env.VITE_WEATHER_API_BASE_URL}/weather?units=metric&lat=${props.lat}&lon=${props.lng}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
            const data = await result.json();
            setInfo(data);
        }

        fetchData();
    }, [props])

    return (   
        <>
            {info != undefined && <div>
                <p>{info.name}</p>
                <p>{info.weather[0].main} - {info.weather[0].description}</p>
                <p>Temperature: {info.main.temp}°C</p>
                <p>Feels like: {info.main.feels_like}°C</p>
                <p>Humidity: {info.main.humidity}</p>
                <p>Pressure: {info.main.pressure}</p>
                <p>Wind Speed: {info.wind.speed}</p>
                <p>Visibility: {info.visibility}</p>
            </div>}
        </>
    );
}

export default WeatherInfo;