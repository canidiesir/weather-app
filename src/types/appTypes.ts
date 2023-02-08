export interface ICoords {
    lat: number;
    lng: number;
}

export interface IWeather {
    name: string,

    weather : Array<{
        main: string,
        description: string
    }>

    main : {
        temp: number,
        feels_like: number,
        humidity: number,
        sea_level: number
    },

    wind : {
        speed: number
    },
    
    visibility: number
}