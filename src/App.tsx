import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Places from './components/Places'
import { useLocation } from './hooks/useLocation'
import { ICoords } from './types/appTypes'
import WeatherInfo from './components/WeatherInfo'

function App() {
  const {location, setLocation, setCurrentLocation} = useLocation();
  
  useEffect(() => {
    setCurrentLocation();
  }, [])

  return (
    <div className="App">
      <div>{location?.lat} and {location?.lng}</div>
      <Places setLocation={setLocation} setCurrentLocation={setCurrentLocation}></Places>
      {location != undefined && <WeatherInfo lat={location.lat} lng={location.lng}></WeatherInfo>}
    </div>
  )
}

export default App
