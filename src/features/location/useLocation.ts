import { useState } from "react";
import { ICoords } from "./locationTypes"

export const useLocation = () => {
    const [location, setLocationDefault] = useState<ICoords>();

    const setLocation = (newLocation: ICoords) => {
        if(location == undefined || JSON.stringify(location) != JSON.stringify(newLocation)) {
            setLocationDefault(newLocation);
        }
    }

    const setCurrentLocation = (firstCall : boolean = false) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords : ICoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
    
            setLocation(coords);
        }, function() {
            if(!firstCall) alert("Allow location access for this feature")
        });
    }

    return {location, setLocation, setCurrentLocation};
}