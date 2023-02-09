export interface IWeatherApi {
    name: string,

    weather : Array<{
        main: string,
        description: string
    }>

    main : {
        temp: number,
        feels_like: number,
        humidity: number,
    },

    wind : {
        speed: number
    },
    
    visibility: number
}

export interface IWeatherInfo {
    location: string,
    weather: string,
    temp: number,
    feels_like: number,
    humidity: number,
    wind_speed: number,
    visibility: number
}

export const getWeatherInfo = (weatherApiInfo: IWeatherApi) : IWeatherInfo => {
    const weatherInfo = {
        location : weatherApiInfo.name,
        weather : weatherApiInfo.weather[0].main + " - " + weatherApiInfo.weather[0].description,
        temp: Math.round(weatherApiInfo.main.temp),
        feels_like: Math.round(weatherApiInfo.main.feels_like),
        humidity: Math.round(weatherApiInfo.main.humidity),
        wind_speed: Math.round(weatherApiInfo.wind.speed),
        visibility: Math.round(weatherApiInfo.visibility)
    }

    return weatherInfo;
}