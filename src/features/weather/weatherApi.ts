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
        pressure: number
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
    pressure: number,
    wind_speed: number,
    visibility: number
}

export const getWeatherInfo = (weatherApiInfo: IWeatherApi) : IWeatherInfo => {
    const weatherInfo = {
        location : weatherApiInfo.name,
        weather : weatherApiInfo.weather[0].main + " - " + weatherApiInfo.weather[0].description,
        temp: weatherApiInfo.main.temp,
        feels_like: weatherApiInfo.main.feels_like,
        humidity: weatherApiInfo.main.humidity,
        pressure: weatherApiInfo.main.pressure,
        wind_speed: weatherApiInfo.wind.speed,
        visibility: weatherApiInfo.visibility
    }

    return weatherInfo;
}