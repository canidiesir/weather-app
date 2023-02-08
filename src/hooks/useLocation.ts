import { useState } from "react";
import { ICoords } from "../types/appTypes"

export const useLocation = () => {
    const [location, setLocation] = useState<ICoords>();

    const setCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords : ICoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
    
            setLocation(coords);
        }, function() {
            alert("location not allowed")
        });
    }

    return {location, setLocation, setCurrentLocation};
}