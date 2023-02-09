import { FC } from "react";
import { useState } from 'react';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import Locations from "./Locations";
import { ICoords } from "./locationTypes";


interface placesProps {
    setLocation: (coords: ICoords) => void;
    setCurrentLocation: () => void;
}

const Places:FC<placesProps> = (props) => {
    const [address, setAddress] = useState("");

    const handleChange = (address: string) => {
        setAddress(address);
    };

    const handleSelect = async (address: string) => {
        const results = await geocodeByAddress(address);
        const coords = await getLatLng(results[0]);
        props.setLocation(coords);
        setAddress(address);
    }

    const handleLocationClick = () => {
        props.setCurrentLocation();
        setAddress("");
    }

    return (
        <Locations address={address} handleChange={handleChange} handleSelect={handleSelect} handleLocationClick={handleLocationClick}></Locations>
    );
}

export default Places;