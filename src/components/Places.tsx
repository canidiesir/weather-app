import { FC } from "react";
import { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { ICoords } from "../types/appTypes";

interface placesProps {
    setLocation: (coords: ICoords) => void;
    setCurrentLocation: () => void;
}

const Places:FC<placesProps> = (props) => {
    const [address, setAddress] = useState("");
    const [myLocation, setMyLocation] = useState(true);

    const handleChange = (address: string) => {
        setAddress(address);
    };

    const handleSelect = async (address: string) => {
        const results = await geocodeByAddress(address);
        const coords = await getLatLng(results[0]);
        props.setLocation(coords);
        setAddress(address);
        setMyLocation(false);
    }

    const handleLocationClick = () => {
        props.setCurrentLocation();
        setAddress("");
        setMyLocation(true);
    }

    return (
        <div>
            {!myLocation && <div onClick={handleLocationClick}>
                Your location
            </div>}
            <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({
                        placeholder: "Search by location"
                    })} />
                    <div>
                    {loading && <div>...</div>}
                    {suggestions.map(suggestion => {
                        return (
                        <div {...getSuggestionItemProps(suggestion)} key={suggestion.description}>
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}

export default Places;