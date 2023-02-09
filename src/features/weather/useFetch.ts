import { useEffect, useState } from "react";
import { ICoords } from "../location/locationTypes";
import { getWeatherInfo, IWeatherInfo } from "./weatherApi";

export const useFetch = (location : ICoords) => {
    const [info, setInfo] = useState<IWeatherInfo>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${import.meta.env.VITE_WEATHER_API_BASE_URL}/weather?units=metric&lat=${location.lat}&lon=${location.lng}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
            const data = await result.json();
            setInfo(getWeatherInfo(data));
        }

        fetchData();
    }, [location])

    return info;
}