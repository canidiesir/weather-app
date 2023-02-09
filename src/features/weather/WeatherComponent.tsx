import { FC } from "react";
import './css/WeatherComponent.css'

interface WeatherComponentProps {
    title: string,
    value: string,
    imgSrc: string
}

const WeatherComponent : FC<WeatherComponentProps> = (props) => {
    return (
    <div className="additional-info">
        <div className="title-container">
                <img src={props.imgSrc} ></img>
                <span>{props.title}</span>
        </div>
        <p className="value">{props.value}</p>
    </div>);
}

export default WeatherComponent;