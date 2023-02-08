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
        pressure: number
    },

    wind : {
        speed: number
    },
    
    visibility: number
}