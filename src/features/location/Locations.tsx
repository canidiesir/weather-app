import { FC } from "react";
import { Button } from "@mui/material";
import PlacesAutocomplete from "react-places-autocomplete";
import './css/Locations.css'
import InputField from "./InputField";

interface locationsProps {
    address: string,
    handleChange: (address: string) => void;
    handleSelect: (address: string) => void;
    handleLocationClick: () => void;
}

const Locations : FC<locationsProps> = (props) => {
    return (
        <div className="locations-container">
            <Button variant="outlined" onClick={props.handleLocationClick} className="current-location">
                <img src="/src/assets/location.png"></img>
                Use my current location
            </Button>
            
            <PlacesAutocomplete value={props.address} onChange={props.handleChange} onSelect={props.handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="input-container">
                    <InputField getInputProps={getInputProps}></InputField>
                    <div className="suggestions">
                    {loading && <div className="suggestion">...</div>}
                    {suggestions.map(suggestion => {
                        return (
                        <div {...getSuggestionItemProps(suggestion)} key={suggestion.description} className="suggestion">
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

export default Locations;